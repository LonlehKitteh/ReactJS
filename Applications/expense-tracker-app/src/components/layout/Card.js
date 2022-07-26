import React, { useRef } from 'react'
import { useLongPress } from 'use-long-press';
import { ACTIONS } from '../../App';

export default function Card({ name, value, dispatch, id }) {
    const ref = useRef(null)
    const longPress = useLongPress(() => {
        dispatch({ type: ACTIONS.DELETE_EXPENSE, payload: { id: id } })
    }, {
        threshold: 2000,
        onCancel() {
            ref.current.classList.remove('deleted')
        },
        onStart() {
            ref.current.classList.add('deleted')
        }
    });

    const themeStyle = {
        borderRightColor: value > 0 ? '#28a745' : '#dc3545'
    }


    return (
        <div className='card' style={themeStyle} {...longPress()} ref={ref}>
            <div className='title'>{name}</div>
            <div className='value'>{value > 0 ? `+ ${value}` : `- ${value * -1}`}</div>
        </div>
    )
}
