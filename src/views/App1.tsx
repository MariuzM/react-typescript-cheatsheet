import React from 'react'

// Simple `text` Prop `string` type
// =======================================
const AppFirst: React.FC<{ text: string }> = () => <div>This is App_1</div>
// =======================================

// Advanced Prop types passing
// =======================================
interface Person {
  first: string
  last: string
}

interface Props {
  text: string

  // Using or (|) to look for alternatives
  randomProp: string | boolean | number | Person | { f1: string } | void

  // Field is optional
  randomPropAnother?: string

  fn: (bob: string) => void | string

  names: string[]

  // String literals to specify exact string values, with a union type to join them together
  status: 'waiting' | 'success'

  // Any object as long as you dont use its properties (not common) */
  obj: object

  // Almost the same as `object`, exactly the same as `Object`
  obj2: {}

  // An object with defined properties (preferred)
  obj3: {
    id: string
    title: string
  }

  // Array of objects!
  objArr: {
    id: string
    title: string
  }[]

  // Alternative function type syntax that takes an event
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
}

const AppSecond: React.FC<Props> = () => <div>This is App_2</div>
// =======================================

// Function type passing, with `void` being nothing to return
// =======================================
function clickMe(a: string, e: object): void {
  console.log(a, typeof e, e)
}
// =======================================

const App1: React.FC = () => {
  return (
    <>
      <AppFirst text="this is a string" />

      <AppSecond text="string" randomProp="test" fn={(e): void => console.log(e)} />

      <button
        type="button"
        onClick={(e: React.MouseEvent<HTMLElement>): void => clickMe('Number', e)}
      >
        Click Me
      </button>
    </>
  )
}

export default App1
