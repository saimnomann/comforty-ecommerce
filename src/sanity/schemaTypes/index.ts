import { type SchemaTypeDefinition } from 'sanity'
import heroSection from '../heroSection'
import faq from '../faq'
import categories from '../categories'
import product from '../product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection,faq,product,categories]

}
