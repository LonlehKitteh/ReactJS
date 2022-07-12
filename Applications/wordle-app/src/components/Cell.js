import React from 'react'

export default function Cell(props) {

    return (
        <div style={{ backgroundColor: props.status ? props.status[props.wordNum]?.status[props.cellNum] : "" }} className='cell'>
            {props.typedWord?.word[props.cellNum] || ""}
        </div>
    )
}
