import { StringMap } from "@common/types"

export type AttributeMap = StringMap<any>

export interface BlockDef {
  type: string
  name: string
  description: string
  prefix: string
  group?: string
  alt?: string[]
  attributes?: AttributeMap
}

export interface InlineDef {
  type: string
  name: string
  description: string
  prefix: string
  attributes?: AttributeMap
}

export interface PostInlineDef {
  type: string
  text: string
  attributes: AttributeMap
}

export interface PostBlockDef {
  type: string
  children?: PostBlockDef[]
  text: Array<string | PostInlineDef>
  attributes: AttributeMap
}

export interface PostDef {
  blocks: PostBlockDef[]
  inlines: PostInlineDef[]
  text: string
  createdAt: number
  updatedAt: number
}

export interface BoardDef {
  name: string
  posts: PostDef[]
}
