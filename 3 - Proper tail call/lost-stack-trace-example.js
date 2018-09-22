"use strict"

const foo = msg => {
  throw new Error(msg)
}

const bar = () => foo("This was called from bar")
