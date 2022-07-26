import React from 'react'

export default function Section(props) {
    return (
        <div className='section'>
            <div className='title'>{props.title}</div>
            <div className='devider'></div>
            {props.children}
        </div>
    )
}
