import cc from "classnames"
import { KeyboardEvent, useEffect, useRef, useState } from "react"

import { BoardHook } from "../useBoard"

export interface PostInputProps {
  board: BoardHook
  index?: number
}

export function PostInput(props: PostInputProps) {
  const { board, index = -1 } = props
  const [value, setValue] = useState<string>(index >= 0 ? board.posts[index].text : "")
  const textarea = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const focused = document.activeElement
    if (index === board.editing && (!focused || focused === document.body)) {
      textarea.current.focus()
    }
  }, [index, board.editing])

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    const { key, altKey, ctrlKey, metaKey, shiftKey } = event

    const hasMetaKey = altKey || ctrlKey || metaKey || shiftKey
    if (key === "Enter") {
      if (hasMetaKey) {
        event.preventDefault()
        if (index >= 0) {
          board.set(index, value)
          board.setEditing(-1)
        } else {
          board.push(value)
        }
        setValue("")
        return
      }
    }
    if (key === "ArrowUp" || key === "ArrowDown") {
      const start = textarea.current.selectionStart
      const end = textarea.current.selectionEnd
      if (start !== end) {
        return
      }
      if (key === "ArrowUp" && start === 0) {
        board.up()
        return
      }
      if (key === "ArrowDown" && start === value.length) {
        board.down()
        return
      }
    }
  }

  const className = cc(
    "post-input resize-none block appearance-none",
    "w-full p-2 border rounded leading-tight",
    "focus:outline-none focus:shadow-outline disabled:bg-gray-200",
    index < 0 && "mt-2"
  )

  return (
    <div className="w-full mb-2">
      <textarea
        value={value}
        ref={textarea}
        onChange={e => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        rows={4}
        placeholder="Write a thought..."
        className={className}
        autoFocus
      />
    </div>
  )
}
