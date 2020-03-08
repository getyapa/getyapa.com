import { StringMap } from "@common/types"

export type AttributeMap = StringMap<any>

export interface Block {
  type: string
  name: string
  description: string
  prefix: string
  group?: string
  alt?: string[]
  attributes?: AttributeMap
}

export interface Inline {
  type: string
  name: string
  description: string
  prefix: string
  attributes?: AttributeMap
}

export interface PostInline {
  type: string
  text: string
  attributes: AttributeMap
}

export interface PostBlock {
  type: string
  children?: PostBlock[]
  text: Array<string | PostInline>
  attributes: AttributeMap
}

export interface Post {
  blocks: PostBlock[]
  inlines: PostInline[]
  text: string
  createdAt: number
  updatedAt: number
}
