import React from 'react'
import App1 from './views/App1'
import App2 from './views/App2'

const App: React.FC = () => {
  return (
    <>
      <App1 text="This is Prop Text String" />
      <App2 text="This is Prop Text String" bool={true} i={5} />
    </>
  )
}

export default App
