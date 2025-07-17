import { useState } from 'react'
import Rout from './Routing/Rout'
import { Theamcontext } from './context/Theamcontext'



function App() {
const [theamcontext, settheame] = useState(" ");
  return (
    <Theamcontext.Provider value={{ theamcontext, settheame }}>
    <div data-theme={theamcontext}>
      
      <Rout/>
    </div>
    </Theamcontext.Provider>
  )
}

export default App
