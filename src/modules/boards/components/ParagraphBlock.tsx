import { PostBlockDef } from "../types"
import { Text } from "./Text"

export interface ParagraphBlockProps {
  block: PostBlockDef
}

export function ParagraphBlock(props: ParagraphBlockProps) {
  const { block } = props
  return (
    <p className="mb-2 text-gray-700">
      <Text text={block.text} />
    </p>
  )
}
