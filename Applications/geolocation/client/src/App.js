import React from 'react'

export default function App() {

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(success => {
      async function submit() {
        const result = await fetch('http://localhost:3000/data', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(success)
        })


        const resultInJson = await result.json()
        console.log(resultInJson)
      }
      submit()
    })
  }

  return (
    <div>
      <form action='/data' method='POST'>

        <button onSubmit={() => handleClick()}>Send Geolocation</button>
      </form>
    </div>
  )
}

