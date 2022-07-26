import React from 'react'

export default function Balance({ expenses }) {

    const ACTIONS = {
        COUNT_BALANCE: 'balance',
        INCOME: 'income',
        EXPENSE: 'expense'
    }

    const countExpenses = ({ type }) => {
        let temp = []
        expenses.map(element => temp.push(element.properties.value))

        switch (type) {
            case ACTIONS.COUNT_BALANCE:
                return (temp.reduce((p, c) => p + c, 0)).toFixed(2)
            case ACTIONS.INCOME:
                return (temp.filter(e => e > 0).reduce((p, c) => p + c, 0)).toFixed(2)
            case ACTIONS.EXPENSE:
                return (temp.filter(e => e < 0).reduce((p, c) => p + c, 0) * -1).toFixed(2)
            default:
                return temp
        }
    }

    return (
        <div className='balance'>
            <div className='data'>
                <h2>Your balance</h2>
                <div>{`${countExpenses({ type: ACTIONS.COUNT_BALANCE })}$`}</div>
            </div>
            <div className='payments'>
                <div className='income'>
                    <h3>income</h3>
                    <div>{`$${countExpenses({ type: ACTIONS.INCOME })}`}</div>
                </div>
                <div className='expense'>
                    <h3>expense</h3>
                    <div>{`$${countExpenses({ type: ACTIONS.EXPENSE })}`}</div>
                </div>
            </div>
        </div>
    )
}
