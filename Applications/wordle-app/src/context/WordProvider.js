import React, { useContext } from 'react'
import { useData } from '../hooks/useData'

const WordContext = React.createContext()

export function useWord() {
    return useContext(WordContext)
}

export default function WordProvider({ children }) {
    const correctWord = useData() || []
    const random = Math.floor(Math.random() * correctWord.length)

    return (
        <WordContext.Provider value={correctWord[random]}>
            {children}
        </WordContext.Provider>
    )
}