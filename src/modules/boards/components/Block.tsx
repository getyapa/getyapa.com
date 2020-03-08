import { PostBlock } from "../types"
import { ParagraphBlock } from "./ParagraphBlock"
import { TitleBlock } from "./TitleBlock"

export interface BlockProps {
  block: PostBlock
}

export function Block(props: BlockProps) {
  const { block } = props

  console.log("Block: ", block)

  switch (block.type) {
    case "title":
      return <TitleBlock block={block} />
    default:
      return <ParagraphBlock block={block} />
  }
}
