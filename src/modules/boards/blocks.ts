import { Block } from "./types"

export const blocks: Block[] = [
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
    prefix: "[ ]",
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
  {
    type: "list",
    name: "",
    description: "",
    group: "list",
    prefix: "1.",
    alt: ["2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
    attributes: {
      type: "ordered",
    },
  },
]
