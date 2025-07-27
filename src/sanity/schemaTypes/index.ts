import { type SchemaTypeDefinition } from 'sanity'
import heroSection from '../heroSection'
import faq from '../faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection,faq]

}
