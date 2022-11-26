import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.css'
import { ContextProvider } from './contexts/ContextProvider'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

