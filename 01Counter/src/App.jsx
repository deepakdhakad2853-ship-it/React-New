import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter , setCounter] = useState(12)

  function addvalue(){
    setCounter (counter +1)
  }
  function removevalue (){
    if(counter > 0){
      setCounter (counter -1)
    }
    else{
      alert("This Value Is Fix 0")
    }
  }
  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addvalue}>Add Value  : {counter}</button>
    <br />
    <button onClick={removevalue}>remove Value :{counter}</button>
    <p>Footer : {counter}</p>
    </>
  )
}

export default App
