import React, { useState, useEffect } from 'react'

function Password({ generatePasswords }) {
    const [passwords, setPasswords] = useState([])

    useEffect(() => {
        setPasswords(generatePasswords())
        console.log('getting passwords!')
    }, [generatePasswords])

    return passwords.map((pass, i) => <div key={i}>{i + 1}. {pass}</div>)
}

export default Password