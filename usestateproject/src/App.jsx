import { useState } from 'react'
import './App.css'


function App() {

  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')


function incrementValue(){
    setCount(count => count + 1)
      setTheme('red')
  }


function decrementValue(){
    setCount(count => count - 1)
    setTheme('green')
}

  return (
    <>
      <button onClick={incrementValue}>+</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={decrementValue}>-</button>
    </>
  )
}

export default App
