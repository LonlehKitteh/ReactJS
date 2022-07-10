import React from 'react'
import Button from './Button'
import CounterProvider from './context/CounterProvider'
import './main.css'

export default function App() {
  return (
    <CounterProvider>
      {
        ['decrease', 'reset', 'increase'].map((e, i) => {
          return <Button variant={i} name={e} key={i} />
        })
      }
    </CounterProvider>
  )
}
