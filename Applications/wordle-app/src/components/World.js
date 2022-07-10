import React from 'react'
import Cell from './Cell'

export default function World(props) {
    return (
        <div className='word'>
            {
                props.word?.split('').map((letter, index) => {
                    return <Cell key={index} letter={letter} />
                })
            }
        </div>
    )
}
