import { PostBlockDef } from "../types"
import { Text } from "./Text"

export interface TitleBlockProps {
  block: PostBlockDef
}

export function TitleBlock(props: TitleBlockProps) {
  const { block } = props
  switch (block.attributes.level) {
    case 1:
      return (
        <h2 className="text-4xl font-heading leading-tight">
          <Text text={block.text} />
        </h2>
      )
    case 2:
      return (
        <h3 className="text-2xl font-heading leading-tight">
          <Text text={block.text} />
        </h3>
      )
    default:
      return (
        <h4 className="text-xl font-heading leading-tight">
          <Text text={block.text} />
        </h4>
      )
  }
}
