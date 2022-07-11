import React, { useState } from 'react'
import Keyboard from './Keyboard'
import Word from './Word'
import { useWord } from '../context/WordProvider'

export default function Wrap() {
    const correctWord = useWord()
    const [word, setWord] = useState([])

    const handleClick = (e) => {
        setWord(prev => [...prev, e])
    }

    return (
        <React.Fragment>
            <div className='board'>
                {
                    <Word word={word} correctWord={correctWord} />
                }
            </div>
            <Keyboard handleClick={handleClick} />
        </React.Fragment>
    )
}
