import axios from 'axios'
import { useState, useEffect } from 'react'

export function useData() {
    const [data, setData] = useState("")

    async function getData() {
        const res = await axios.get('https://rhdzmota.com/files/wordle.json')

        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return data
}
