import { useState } from "react"

import { blocks } from "./blocks"
import { inlines } from "./inlines"
import { parsePost } from "./parsePost"
import { Post } from "./types"

function satisfiesQuery(post: Post, query: BoardQuery) {
  if (query.tags) {
    for (const tag of query.tags) {
      if (!post.inlines.find(inline => inline.type === "tag" && inline.text === tag)) {
        return false
      }
    }
  }

  if (query.untagged) {
    return post.inlines.length === 0
  }

  return true
}

export interface BoardQuery {
  tags?: string[]
  untagged?: boolean
}

export interface BoardHook {
  posts: Post[]
  allPosts: Post[]
  editing: number
  query: BoardQuery
  setQuery(query: BoardQuery): void
  push(post: string): void
  set(index: number, post: string): void
  setEditing(index: number): void
  up(): void
  down(): void
}

interface FilteredPost extends Post {
  unfileredIndex: number
}

export function useBoard(): BoardHook {
  const [posts, setPosts] = useState<FilteredPost[]>([])
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [query, setQuery] = useState<BoardQuery>({})
  const [editing, setEditing] = useState<number>(-1)

  function updatePosts(allPosts: Post[], query: BoardQuery) {
    const result: FilteredPost[] = []
    allPosts.forEach((p, unfileredIndex) => {
      if (satisfiesQuery(p, query)) {
        result.push({ ...p, unfileredIndex })
      }
    })

    setPosts(result)
  }

  function push(text: string) {
    const now = Date.now()
    setAllPosts(posts => {
      const allPosts = posts.concat(parsePost({ blocks, inlines, text, createdAt: now, updatedAt: now }))
      updatePosts(allPosts, query)
      return allPosts
    })
  }

  function set(index, text) {
    setAllPosts(posts => {
      const allPosts = posts.map((p, i) => {
        if (index !== i) return p
        return parsePost({ blocks, inlines, text, createdAt: p.createdAt, updatedAt: Date.now() })
      })
      updatePosts(allPosts, query)
      return allPosts
    })
  }

  return {
    posts,
    allPosts,
    editing,
    query,
    push,
    set,
    setQuery(query: BoardQuery) {
      updatePosts(allPosts, query)
      setQuery(query)
    },
    setEditing(index) {
      setEditing(index)
    },
    up() {
      if (editing < 0) {
        setEditing(posts.length - 1)
      } else if (editing > 0) {
        setEditing(e => e - 1)
      }
    },
    down() {
      if (editing >= posts.length - 1) {
        setEditing(-1)
      } else if (editing >= 0) {
        setEditing(e => e + 1)
      }
    },
  }
}
