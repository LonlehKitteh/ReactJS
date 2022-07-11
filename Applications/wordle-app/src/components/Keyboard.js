import React from 'react'
import { useWord } from '../context/WordProvider';

export default function Keyboard() {
    const listofWords = useWord()
    const keys = ['qwertyuiop', 'asdfghjkl', '1zxcvbnm2'];

    const handleClick = key => {
        console.log(listofWords)
    }

    return (
        <div className='keyboard'>
            {
                keys.map((letters, index) => {
                    return <div key={index} className='keyboard-row'>
                        {letters.split('').map((key, i) => {
                            return <div onClick={() => handleClick(key)} className="key" key={`${index}-${i}`}>{key === '1' ? 'ENTER' : key === '2' ? 'DEL' : key.toUpperCase()}</div>
                        })}
                    </div>
                })
            }
        </div>
    )
}
