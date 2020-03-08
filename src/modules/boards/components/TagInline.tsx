import { PostInline } from "../types"

export interface TagInlineProps {
  inline: PostInline
}

export function TagInline(props: TagInlineProps) {
  const { inline } = props

  return (
    <a href={"#" + inline.text} className="text-blue-600 ml-2">
      #{inline.text}
    </a>
  )
}
