import { PostBlockDef } from "../types"
import { Text } from "./Text"

interface ListItemProps {
  item: PostBlockDef
}

function ListItem(props: ListItemProps) {
  const { item } = props

  switch (item.attributes.type || "") {
    case "todo":
      return (
        <li>
          <input type="checkbox" checked={item.attributes.checked} /> <Text text={item.text} />
        </li>
      )
    default:
      return (
        <li className="list-disc">
          <Text text={item.text} />
        </li>
      )
  }
}

export interface ListBlockProps {
  block: PostBlockDef
}

export function ListBlock(props: ListBlockProps) {
  const { block } = props

  return (
    <ul>
      {block.children.map((item, i) => (
        <ListItem item={item} key={i} />
      ))}
    </ul>
  )
}
