import React, { useContext } from 'react'
import { useData } from '../hooks/useData'

const WordContext = React.createContext()

export function useWord() {
    return useContext(WordContext)
}

export default function WordProvider({ children }) {
    const correctWord = useData() || []

    return (
        <WordContext.Provider value={correctWord}>
            {children}
        </WordContext.Provider>
    )
}