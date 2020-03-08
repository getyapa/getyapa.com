import { PostBlock } from "../types"
import { Inlines } from "./Inlines"

export interface ParagraphBlockProps {
  block: PostBlock
}

export function ParagraphBlock(props: ParagraphBlockProps) {
  const { block } = props
  return (
    <p className="mb-2 text-gray-700">
      <Inlines inlines={block.text} />
    </p>
  )
}
