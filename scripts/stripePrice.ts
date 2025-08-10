import Stripe from 'stripe'
import dotenv from "dotenv"

import { createClient } from "@sanity/client";
dotenv.config()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset:process.env.SANITY_DATASET,
  apiVersion:process.env.SANITY_API_VERSION,
  token: process.env.SANITY_AUTH_TOKEN, 
  useCdn:false
})
async function fetchSanityProducts() {
  return await sanity.fetch(`
    *[_type == "products" && !defined(price_id)]{
      _id,
      title,
      price,
      description,
      price_id,
    }
  `)
}

async function syncProducts() {
  const products = await fetchSanityProducts()

  for (const product of products) {
    try {
      const stripeProduct = await stripe.products.create({
        images:product.imageUrl,
        name: product.title,
        description: product.description,

      })

      const stripePrice = await stripe.prices.create({
        unit_amount: product.price * 100, // price in cents
        currency: 'usd',
        product: stripeProduct.id,
      })

      await sanity.patch(product._id)
        .set({ price_id: stripePrice.id })
        .commit()

      console.log(`Synced: ${product.title}`)
    } catch (error) {
      console.error(` Failed to sync: ${product.title}`, error)
    }
  }
}

syncProducts()

