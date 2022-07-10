import React from 'react'
import { useCounter } from './context/CounterProvider'

const Button = props => {
    const handleClick = useCounter()

    return (
        <button onClick={() => handleClick(props.variant)}>{props.name}</button>
    )
}

export default Button