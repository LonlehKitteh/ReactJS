import React from 'react'

export default function Word() {

    return (
        <div className='word'>
            {
                Array(5).fill('').map((letter, index) => {
                    return <div className='cell' key={index}></div>
                })
            }
        </div>
    )
}