import React from 'react'

export default function World() {
    return (
        Array(5).fill('').map((e, i) => {
            return <Cell key={i} />
        })
    )
}
