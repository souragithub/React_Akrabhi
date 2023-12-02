import { useState , useReducer} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function reducer(state,action){
  return {count: state.count + 1}
}

function App() {
  const [state, dispatch]=useReducer(reducer, {count: 0})

  function removeValue(){
    // if(counter >0){
    //   setCounter(counter - 1)
    // }
  }


  function addValue(){
    dispatch()
  }

  return (
    <>
    <h1> Counter Project </h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>add value{counter}</button>
    <span>{state.count}</span>
    <button onClick={removeValue}>remove Value {counter}</button>
    <p>Footer : {counter}</p>
    </>
  )
}

export default App
