import React from 'react'
import App1 from './views/App1'
import App2 from './views/App2'
import App3 from './views/App3'

const App: React.FC = () => {
  return (
    <>
      <App1 />
      <App2 />
      <App3 name="Marius" number={5} />
    </>
  )
}

export default App
