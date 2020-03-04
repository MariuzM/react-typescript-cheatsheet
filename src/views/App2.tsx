import React from 'react'

interface Person {
  firstName: string
  lastName: string
}

interface Props {
  text: string
  bool: boolean
  // bool?: boolean // Field is optional
  i: number
  // fn: (bob: string) => void | number | string˜
  // obj: { f1: string }
  // person: Person
}

const App2: React.FC<Props> = () => {
  return <div>This is App_2</div>
}

export default App2
