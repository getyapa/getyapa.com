import { PostBlock } from "../types"
import { ListBlock } from "./ListBlock"
import { ParagraphBlock } from "./ParagraphBlock"
import { TitleBlock } from "./TitleBlock"

export interface BlockProps {
  block: PostBlock
}

export function Block(props: BlockProps) {
  const { block } = props

  switch (block.type) {
    case "title":
      return <TitleBlock block={block} />
    case "list":
      return <ListBlock block={block} />
    default:
      return <ParagraphBlock block={block} />
  }
}
