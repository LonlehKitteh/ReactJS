import React from 'react'
import Wrap from './components/Wrap'
import WordProvider from './context/WordProvider'
import './css/main.css'

export default function App() {

  return (
    <React.Fragment>
      <div className='title'>Worlde</div>
      <WordProvider>
        <Wrap />
      </WordProvider>
    </React.Fragment>
  )
}
