import { Fragment } from "react"

import { PostInlineDef } from "../types"
import { TagInline } from "./TagInline"

interface TextItemProps {
  item: string | PostInlineDef
}

function TextItem(props: TextItemProps) {
  const { item } = props

  if (typeof item === "string") {
    return <Fragment>{item}</Fragment>
  }

  switch (item.type) {
    case "tag":
      return <TagInline inline={item} />
    default:
      return <span>{item}</span>
  }
}

export interface TextProps {
  text: Array<string | PostInlineDef>
}

export function Text(props: TextProps) {
  const { text } = props

  return (
    <Fragment>
      {text.map((t, i) => (
        <TextItem item={t} key={i} />
      ))}
    </Fragment>
  )
}
