import React from 'react'
import App_1 from './views/App_1'
import App_2 from './views/App_2'

const App: React.FC = () => {
  return (
    <>
      <App_1 text="This is Prop Text String" />
      <App_2 text="This is Prop Text String" bool={true} i={5} />
    </>
  )
}
export default App
