import React, { useState, useEffect } from 'react'
import Keyboard from './Keyboard'
import Word from './Word'
import { useWord } from '../context/WordProvider'
import { useData } from '../hooks/useData'

export default function Wrap() {
    const words = useWord()
    const [correctWord, setCorrectWord] = useState('')
    const data = useData()
    const [word, setWord] = useState([{ try: 1, word: [] }])
    const [status, setStatus] = useState([])

    useEffect(() => {
        setCorrectWord(words[Math.floor(Math.random() * words.length)])
    }, [words, setCorrectWord])


    const handleClick = (e) => {
        if (word[word.length - 1].word.length > 5) return

        if (e === '1' && word[word.length - 1].word.length === 5) {

            // error word handle
            if (!data.includes(word[word.length - 1].word.join(''))) {
                console.log("Incorrect word!")
                return
            }

            //setting up wordle colors
            const temp = {
                try: word[word.length - 1].try,
                status: word[word.length - 1].word.map((letter, index) => {
                    if (!correctWord.includes(letter)) return 'gray' // incorrect
                    if (correctWord.split('')[index] === letter) return '#538d4e' // correct
                    return '#b59f3b' // bad place
                })
            }
            setStatus(prev => [...prev, temp])

            setWord(current => [...current, { try: word[word.length - 1].try + 1, word: [] }])

            // game over
            if ([...status, temp].map(e => e.status.every(s => s === '#538d4e')).find(e => e === true)) {
                setTimeout(() => {
                    setWord([{ try: 1, word: [] }])
                    setStatus([])
                    setCorrectWord(words[Math.floor(Math.random() * words.length)])
                }, 2000)
            }
        }
        if (e === '1') return
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
                        return <Word key={i} word={word[i]} correctWord={correctWord} counter={i} status={status} />
                    })
                }
            </div>
            <Keyboard handleClick={handleClick} />
        </React.Fragment>
    )
}
