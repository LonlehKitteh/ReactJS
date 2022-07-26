import React from 'react'
import { ACTIONS } from '../App'
import Input from './layout/Input'
import Section from './layout/Section'

export default function AddNew({ properties, setProperties, dispatch }) {

    const handlePointerDown = e => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_EXPENSE, payload: { properties: properties } })
        setProperties({ name: "", value: 0 })
    }

    return (
        <Section title="Add new transaction">
            <Input setProperties={setProperties} properties={properties} title="text" />
            <Input setProperties={setProperties} properties={properties} title="amount" />
            <button onPointerDown={handlePointerDown}>Add transaction</button>
            <button className='delete' onPointerDown={() => dispatch({ type: ACTIONS.DELETE_ALL })}>Delete all</button>
        </Section >
    )
}
