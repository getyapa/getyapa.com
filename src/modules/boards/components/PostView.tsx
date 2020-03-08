import { BoardHook } from "../useBoard"
import { Block } from "./Block"
import { PostInput } from "./PostInput"

export interface PostViewProps {
  board: BoardHook
  index: number
}

export function PostView(props: PostViewProps) {
  const { board, index } = props
  if (board.editing === index) {
    return <PostInput board={board} index={index} />
  }

  const post = board.posts[index]
  return (
    <div className="py-1 mb-1 border-b">
      {post.blocks.map((b, i) => (
        <Block block={b} key={i} />
      ))}
    </div>
  )
}
