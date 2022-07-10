import React from 'react'
import './css/main.css'
import { useData } from './hooks/useData'

export default function App() {
  const worlds = useData() || []


  return (
    <>
      <div className='title'>Worlde</div>
    </>
  )
}
