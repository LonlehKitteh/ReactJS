import React, { useState, useMemo, useEffect, useCallback } from 'react'
import Password from './Password'

export default function App() {
  const [value, setValue] = useState("")

  const characters = useMemo(() => {
    const temp = {}
    for (let i = 33; i < 127; i++) temp[(i - 33)] = String.fromCharCode(i)
    return temp
  }, [])

  useEffect(() => {
    console.log('Generate characters!')
  }, [characters])


  const generatePasswords = useCallback(() => {
    const main = []
    for (let i = 0; i < 15; i++) {
      let temp = value.split("") || []
      for (let i = 0; i < 11 - value.length; i++) {
        temp.push(characters[Math.floor(Math.random() * 93)])
      }
      main.push(temp.join(""))
    }
    return main
  }, [value])

  return (
    <React.Fragment>
      Your Password will start with characters: <input type="text" maxLength={10} value={value} onChange={(e) => setValue(e.target.value)}></input>
      <span> Characters left {10 - value.length}.</span>
      <Password generatePasswords={generatePasswords} />
    </React.Fragment>
  )
}
