import { useState, useEffect, useMemo } from 'react'
import './App.css'

export default function App() {
  const [number,setNumber] = useState(0)
  const [dark,setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  },[number])
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'balck'
    }
  }, [dark])
  useEffect(() => {
    console.log('Theme Changed')
  },[themeStyles])  

  return (
    <>
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}/>       
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>
        {doubleNumber}
      </div>
    </>
  )
}

function slowFunction(num){
  for (let i =0;i<10000000;i++){

  }
  return num *2
}