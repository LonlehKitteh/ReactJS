import React, { useState, useCallback } from 'react'
import List from './List.js'

export default function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback((incremantor) => {
    return [number, number + incremantor, number + incremantor * 2]
  }, [number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prev => !prev)}>Toggle theme</button>
      <List getItems={getItems} />
    </div>
  )
}
