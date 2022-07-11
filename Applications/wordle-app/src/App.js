import React from 'react'
import WordProvider from './context/WordProvider'
import './css/main.css'

export default function App() {

  return (
    <React.Fragment>
      <div className='title'>Worlde</div>
      <WordProvider></WordProvider>
    </React.Fragment>
  )
}
