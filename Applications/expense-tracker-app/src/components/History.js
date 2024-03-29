import React from 'react'
import Section from './layout/Section'
import Card from './layout/Card'

export default function History({ expenses, dispatch }) {
    return (
        <Section title='History'>
            {
                expenses.map(expense => {
                    return <Card key={expense.id} id={expense.id} dispatch={dispatch} name={expense.properties.name} value={expense.properties.value} />
                })
            }
        </Section>
    )
}
