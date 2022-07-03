import React from 'react'
import ColorShower from './ColorShower'
import { ColorProvider } from './context/ColorContext'
import './css/main.css'

export default function App() {

  return (
    <ColorProvider>
      <ColorShower />
    </ColorProvider>
  )
}
