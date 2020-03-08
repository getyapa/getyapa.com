import { PostBlock } from "../types"
import { Inlines } from "./Inlines"

export interface TitleBlockProps {
  block: PostBlock
}

export function TitleBlock(props: TitleBlockProps) {
  const { block } = props
  switch (block.attributes.level) {
    case 1:
      return (
        <h2 className="text-4xl font-heading leading-tight">
          <Inlines inlines={block.text} />
        </h2>
      )
    case 2:
      return (
        <h3 className="text-2xl font-heading leading-tight">
          <Inlines inlines={block.text} />
        </h3>
      )
    default:
      return (
        <h4 className="text-xl font-heading leading-tight">
          <Inlines inlines={block.text} />
        </h4>
      )
  }
}
