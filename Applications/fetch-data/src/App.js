import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './main.css'

function App() {
  const [data, setData] = useState([])
  const [showSpinner, setShowSpinner] = useState(false)

  const getData = async () => {
    await new Promise(r => {
      setShowSpinner(true)
      setTimeout(r, 5000)
    })
    const res = await axios.get('https://fakerapi.it/api/v1/users?_quantity=1000&_gender=male')
    const random = Math.floor(Math.random() * 1000)
    res.data.data.length = random
    setData(res.data.data)
    setShowSpinner(false)
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <>
      {showSpinner ?
        <div className='spinner'>
          <div className='loader'></div>
        </div>
        : null}
      <ol>
        {data.map((e, key) => <li key={key}>IP: {e.ip}</li>)}
      </ol>
    </>
  )
}

export default App