import { Fragment } from "react"

import { PostInline } from "../types"
import { TagInline } from "./TagInline"

interface InlineItemProps {
  inline: string | PostInline
}

function InlineItem(props: InlineItemProps) {
  const { inline } = props

  if (typeof inline === "string") {
    return <Fragment>{inline}</Fragment>
  }

  switch (inline.type) {
    case "tag":
      return <TagInline inline={inline} />
    default:
      return <span>{inline}</span>
  }
}

export interface InlinesProps {
  inlines: Array<string | PostInline>
}

export function Inlines(props: InlinesProps) {
  const { inlines } = props

  return (
    <Fragment>
      {inlines.map((t, i) => (
        <InlineItem inline={t} key={i} />
      ))}
    </Fragment>
  )
}
