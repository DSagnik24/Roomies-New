import { useState } from 'react'
import './App.css'
import { toast } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>This is main page</h1>
      <button onClick={()=>{ 
        toast.success("Hello World!") 
      }}>Click me</button>
    </div>
    </>
  )
}

export default App
