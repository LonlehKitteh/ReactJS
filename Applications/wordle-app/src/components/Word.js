import React from 'react'
import Cell from './Cell'

export default function Word(props) {

    return (
        <div className='word'>
            {
                props.correctWord?.split('').map((e, i) => <Cell key={i} wordNum={props.counter} cellNum={i} correctLetter={e} typedWord={props.word} status={props.status} />)
            }
        </div>
    )
}