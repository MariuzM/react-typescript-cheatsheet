import React from 'react'

const obj: {
  name: string
  level: number
} = {
  name: 'Marius',
  level: 77,
}

const App2: React.FC = () => {
  return <div style={{ backgroundColor: '#ABEBC6' }}>{obj.level}</div>
}

export default App2
