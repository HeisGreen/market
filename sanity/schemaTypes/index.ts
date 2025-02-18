import { type SchemaTypeDefinition } from 'sanity'
import { productTypes } from './productTypes'
import { categoryType } from './categoryType'
import { orderType } from './orderType'
import { salesType } from './salesType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productTypes, categoryType, orderType, salesType],
}
