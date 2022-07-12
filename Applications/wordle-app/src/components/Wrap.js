import React, { useState } from 'react'
import Keyboard from './Keyboard'
import Word from './Word'
import { useWord } from '../context/WordProvider'

export default function Wrap() {
    const correctWord = useWord()
    const [word, setWord] = useState([{ try: 1, word: [] }])

    const handleClick = (e) => {
        if (e === '1' && word[word.length - 1].word.length === 5) {
            return setWord(current => [...current, { try: word[word.length - 1].try + 1, word: [] }])
        }

        setWord(current => current.map(obj => {
            if (obj.try === current[current.length - 1].try) {
                return { ...obj, word: e !== '2' ? [...current[current.length - 1].word, e].slice(0, 5) : current[current.length - 1].word.slice(0, -1) }
            }
            return obj
        }))
    }

    return (
        <React.Fragment>
            <div className='board'>
                {
                    Array(6).fill('').map((_, i) => {
                        return <Word key={i} word={word} correctWord={correctWord} counter={i + 1} />
                    })
                }
            </div>
            <Keyboard handleClick={handleClick} />
        </React.Fragment>
    )
}
