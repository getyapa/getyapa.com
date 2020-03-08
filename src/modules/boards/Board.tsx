import { PostView } from "./components"
import { PostInput } from "./components/PostInput"
import { useBoard } from "./useBoard"

export interface BoardProps {}

export function Board(props: BoardProps) {
  const board = useBoard()

  return (
    <div className="w-full">
      <h1 className="text-5xl font-heading leading-tight">New Board</h1>
      {board.posts.map((p, i) => (
        <PostView board={board} index={i} key={i} />
      ))}
      <PostInput board={board} />
    </div>
  )
}
