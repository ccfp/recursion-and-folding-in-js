"use strict"

const foo = msg => {
  new Error(msg)
}

const bar = () => foo("This was called from bar")
