import { StringMap } from "@common/types"

import { Block, Inline, Post, PostBlock, PostInline } from "./types"

function getBlocksByPrefix(blocks: Block[]): StringMap<Block> {
  const result: StringMap<Block> = {}

  for (const block of blocks) {
    result[block.prefix] = block
    if (block.alt) {
      for (const alt of block.alt) {
        result[alt] = block
      }
    }
  }

  return result
}

function getTextFromLine(words: string[], inlines: Inline[], post: Post): Array<string | PostInline> {
  const result: Array<string | PostInline> = []

  let current: string = ""
  for (const word of words) {
    let hasInline = false
    for (const inline of inlines) {
      const { type, attributes = {}, prefix } = inline
      if (word.substr(0, prefix.length) === prefix) {
        if (current) result.push(current)
        const toAdd = { type, attributes, text: word.substr(1) }
        post.inlines.push(toAdd)
        result.push(toAdd)
        hasInline = true
        current = ""
        break
      }
    }
    if (!hasInline) {
      current += " " + word
    }
  }

  if (current) result.push(current)

  return result
}

export interface ParsePostPayload {
  blocks: Block[]
  inlines: Inline[]
  text: string
  createdAt: number
  updatedAt: number
}

export function parsePost(payload: ParsePostPayload): Post {
  const { blocks, inlines, text, createdAt, updatedAt } = payload
  const blocksByPrefix = getBlocksByPrefix(blocks)

  const result: Post = { blocks: [], inlines: [], text, createdAt, updatedAt }

  let currentGroup: PostBlock
  for (const _line of text.split("\n")) {
    const line = _line.trim()
    const words = line.split(" ")
    const block = blocksByPrefix[words[0]]

    if (block) {
      const { type, attributes = {} } = block
      // consumes the first element
      words.shift()

      if (block.group) {
        if (!currentGroup || currentGroup.type !== block.group) {
          currentGroup = {
            type: block.group,
            children: [],
            attributes: {},
            text: [],
          }
          result.blocks.push(currentGroup)
        }
        currentGroup.children.push({
          type,
          attributes,
          text: getTextFromLine(words, inlines, result),
        })
      } else {
        currentGroup = null
        result.blocks.push({
          type: block.type,
          attributes,
          text: getTextFromLine(words, inlines, result),
        })
      }
    } else {
      currentGroup = null
      result.blocks.push({
        type: "text",
        attributes: {},
        text: getTextFromLine(words, inlines, result),
      })
    }
  }

  return result
}
