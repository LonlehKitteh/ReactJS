import React from 'react'
import AmazingBtn from './AmazingBtn'
import { useColor } from './context/ColorContext'

const ColorShower = () => {
    const color = useColor()

    return (
        <div className='color' style={{ background: `#${color}` }}>
            <div>#{color}</div>
            <AmazingBtn />
        </div>
    )
}

export default ColorShower