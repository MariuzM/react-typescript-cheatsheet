import React from 'react'

const App1: React.FC<{ text: string }> = () => {
  return <div>Test</div>
}

interface Person {
  firstName: string
  lastName: string
}

interface Props {
  text: string
  bool: boolean
  // bool?: boolean // Field is optional
  i: number
  // fn: (bob: string) => void | number | string
  // obj: { f1: string }
  // person: Person
}

const App2: React.FC<Props> = () => {
  return <div></div>
}

const App: React.FC = () => {
  return (
    <>
      <App1 text="This is Prop Text String" />
      <App2 text="This is Prop Text String" bool={true} i={5} />
    </>
  )
}
export default App

// export default function App() {
//   function greeter(name: string) {
//     console.log('Hello, ', name)
//   }

//   return (
//     <button onClick={(event: React.MouseEvent<HTMLElement>) => greeter('Name')}>
//       Test
//     </button>
//   )
// }

// const test = useRef<HTMLButtonElement>(null)

// interface ToggleProps {
//   ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
// }

// export function Toggle(Props: ToggleProps): Function {
//   return <button onClick={Props.ClickHandler}>Toggle</button>
// }
