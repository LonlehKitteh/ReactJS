import React, { useContext, useRef } from 'react'
import { useData } from '../hooks/useData'
import Keyboard from '../components/Keyboard'
import Word from '../components/Word'

const WordContext = React.createContext()

export function useWord() {
    return useContext(WordContext)
}

export default function WordProvider({ children }) {
    const correctWord = useData() || []

    return (
        <WordContext.Provider value={correctWord}>
            <div className='board'>
                {
                    Array(6).fill('').map((_, i) => {
                        return <Word key={i} />
                    })
                }
            </div>
            <Keyboard />
        </WordContext.Provider>
    )
}