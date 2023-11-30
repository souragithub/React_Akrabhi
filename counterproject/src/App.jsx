import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  //let counter = 15;
  function removeValue(){
    if(counter >0){
      setCounter(counter - 1)
    }
  }


  function addValue(){
    //counter = counter +1
    if(counter<20){
      setCounter(counter + 1);
    }
  }

  return (
    <>
    <h1> Counter Project </h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>add value{counter}</button>
    <br/>
    <button onClick={removeValue}>remove Value {counter}</button>
    <p>Footer : {counter}</p>
    </>
  )
}

export default App
