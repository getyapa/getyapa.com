import { PostBlock } from "../types"
import { Text } from "./Text"

export interface ParagraphBlockProps {
  block: PostBlock
}

export function ParagraphBlock(props: ParagraphBlockProps) {
  const { block } = props
  return (
    <p className="mb-2 text-gray-700">
      <Text text={block.text} />
    </p>
  )
}
