import React from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext'

export default function App() {

  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  )
}
// ThemeProvider is our logic for handling our state to children