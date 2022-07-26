import React from 'react'

export default function Input({ title, properties, setProperties }) {

    const handleChange = (event, type) => {
        switch (type) {
            case "name":
                return setProperties({ ...properties, name: event.target.value })
            case "value":
                return setProperties({ ...properties, value: +event.target.value })
            default:
                return properties.name;
        }
    }

    return (
        <div className={title}>
            {
                title === 'text' ?
                    <React.Fragment>
                        <h4>Text</h4>
                        <input placeholder='Enter text...' value={properties.name || ""} onChange={e => handleChange(e, "name")}></input>
                    </React.Fragment> :
                    <React.Fragment>
                        <h4>Amount</h4>
                        <h4>(negative - expense, positive - income)</h4>
                        <input type="number" placeholder='Enter amount...' value={properties.value || ""} onChange={e => handleChange(e, "value")}></input>
                    </React.Fragment>
            }
        </div>
    )
}
