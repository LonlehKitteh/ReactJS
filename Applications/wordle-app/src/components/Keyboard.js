import React from 'react'

export default function Keyboard(props) {
    const keys = ['qwertyuiop', 'asdfghjkl', '1zxcvbnm2'];

    return (
        <div className='keyboard'>
            {
                keys.map((letters, index) => {
                    return <div key={index} className='keyboard-row'>
                        {letters.split('').map((key, i) => {
                            return <div onClick={() => props.handleClick(key)} className="key" key={`${index}-${i}`}>{key === '1' ? 'ENTER' : key === '2' ? 'DEL' : key.toUpperCase()}</div>
                        })}
                    </div>
                })
            }
        </div>
    )
}
