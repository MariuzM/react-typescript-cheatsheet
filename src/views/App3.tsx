import React from 'react'
import User from '../interfaces/User'

function TestFunction(): JSX.Element {
  return <div>Test</div>
}

const TestArrow: React.FC<User> = ({ name, number }) => (
  <div>
    {name} and {number}
  </div>
)

const App3: React.FC<User> = ({ name, number }) => {
  function clickingMe(num1: number, num2: number): number {
    console.log(num1 + num2)
    return num1 + num2
  }

  return (
    <div style={{ backgroundColor: '#AEB6BF' }}>
      <TestFunction />
      Passing props: Name: {name} and Number: {number}
      <TestArrow name="Tom" number={10} />
      <button onClick={(): number => clickingMe(4, 5)}>Another Button</button>
    </div>
  )
}

export default App3
