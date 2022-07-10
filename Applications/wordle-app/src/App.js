import React, { useEffect } from 'react'
import World from './components/World'
import './css/main.css'
import useWord from './hooks/useWord'

export default function App() {
  const word = useWord() || ""

  return (
    <>
      <div className='title'>Worlde</div>
      <div className='board'>
        {
          Array(6).fill('').map((_, i) => {
            return <World key={i} word={word} />
          })
        }
      </div>
    </>
  )
}
