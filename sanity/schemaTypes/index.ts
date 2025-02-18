import { type SchemaTypeDefinition } from 'sanity'
import { productTypes } from './productTypes'
import { categoryType } from './categoryType'
import { orderType } from './orderType'
import { salesType } from './salesType'
import { blockContentType } from './blockContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, productTypes, categoryType, orderType, salesType],
}
