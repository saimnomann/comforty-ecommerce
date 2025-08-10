export const apiVersion =
  process.env.SANITY_API_VERSION || "2025-07-26"

export const dataset = assertValue(
  process.env.SANITY_DATASET,
  'production'
)

export const projectId = assertValue(
  process.env.SANITY_PROJECT_ID,
  'pxyyukwd'
)

export const authToken=assertValue(
  process.env.SANITY_AUTH_TOKEN,
  "skz0bHcBI1BaF55jSHeDP70SdBwM6GFaak88e79cJtFs76bLKpEyBcT9tVJndCX2DmojzwlzS9FYJjPo1"

)
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
