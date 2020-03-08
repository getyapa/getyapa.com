import { BlockDef } from "./types"

export const blocks: BlockDef[] = [
  {
    type: "title",
    name: "",
    description: "",
    prefix: "#",
    alt: [".title"],
    attributes: {
      level: 1,
    },
  },
  {
    type: "title",
    prefix: "##",
    name: "",
    description: "",
    alt: [".subtitle"],
    attributes: {
      level: 2,
    },
  },
  {
    type: "title",
    prefix: "###",
    name: "",
    description: "",
    alt: [],
    attributes: {
      level: 3,
    },
  },
  {
    type: "list",
    name: "",
    description: "",
    group: "list",
    prefix: "-",
    attributes: {
      type: "unsorted",
    },
  },
  {
    type: "list",
    name: "",
    description: "",
    group: "list",
    prefix: "[_]",
    attributes: {
      type: "todo",
      checked: false,
    },
  },
  {
    type: "list",
    name: "",
    description: "",
    group: "list",
    prefix: "[x]",
    attributes: {
      type: "todo",
      checked: true,
    },
  },
]
