import React from 'react'

const AppFirst: React.FC<{ text: string }> = () => {
  return <div>This is App_1</div>
}

interface Person {
  first: string
  last: string
}

interface Props {
  text: string
  randomProp: string | boolean | number | Person | { f1: string } | void
  randomPropAnother?: string // Field is optional
  fn: (bob: string) => void | string
}

const AppSecond: React.FC<Props> = () => {
  return <div>This is App_2</div>
}

// const ClickButton: React.FC = () => {
//   return
// }

function clickMe(a: string, e: object): void {
  console.log(typeof e)
  console.log(a, e)
}

// interface ToggleProps {
//   ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
// }

// export function Toggle(Props: ToggleProps): Function {
//   return <button onClick={Props.ClickHandler}>Toggle</button>
// }

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
