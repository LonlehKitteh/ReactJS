import React from 'react'
import { useUpdateColor } from './context/ColorContext'

const AmazingBtn = () => {
    const updateColor = useUpdateColor()

    return (
        <div className='btn' onClick={updateColor}>Show Magic!</div>
    )
}

export default AmazingBtn