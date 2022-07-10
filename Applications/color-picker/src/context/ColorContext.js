import React, { useContext, useState } from 'react'

const ColorContext = React.createContext()
const ColorUpdateContext = React.createContext()

export function useColor() {
    return useContext(ColorContext)
}

export function useUpdateColor() {
    return useContext(ColorUpdateContext)
}

export function ColorProvider({ children }) {
    const [color, setColor] = useState(Math.floor(Math.random() * 16777215).toString(16))
    const changeColor = () => setColor(Math.floor(Math.random() * 16777215).toString(16))

    return (
        <ColorContext.Provider value={color}>
            <ColorUpdateContext.Provider value={changeColor}>
                {children}
            </ColorUpdateContext.Provider>
        </ColorContext.Provider>
    )
}
