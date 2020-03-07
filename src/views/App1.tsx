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
  randomProp: string | boolean | number | Person | { f1: string } | void // using or (|) to look for alternatives
  randomPropAnother?: string // Field is optional
  fn: (bob: string) => void | string
}

const AppSecond: React.FC<Props> = () => <div>This is App_2</div>
// =======================================

// Function type passing
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
