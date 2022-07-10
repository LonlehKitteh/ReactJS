import React, { useContext, useState } from 'react'

const CounterContext = React.createContext()

export function useCounter() {
    return useContext(CounterContext)
}

const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)

    const handleClick = variant => {
        switch (variant) {
            case 0:
                setCounter(prev => prev -= 1)
                break;
            case 1:
                setCounter(0)
                break;
            case 2:
                setCounter(prev => prev += 1)
                break;
            default:
                break;
        }
    }

    return (
        <CounterContext.Provider value={handleClick}>
            <div>Counter</div>
            <div className='counter'>{counter}</div>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider