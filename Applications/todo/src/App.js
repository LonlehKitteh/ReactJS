import React, { useState, useRef } from 'react'
import Task from './Task'
import './css/main.css'

export default function App() {
  const [todos, setTodos] = useState([])
  const refTodo = useRef(null)

  const handleClick = () => {
    if (!refTodo.current.value || todos.find(todo => todo.text === refTodo.current.value)) return
    setTodos([...todos, { text: refTodo.current.value }])
  }

  return (
    <>
      <label id="text">Add new: </label><input type="text" ref={refTodo} name="text" id="text" placeholder='Take out the rubbish' />
      <button onClick={handleClick}>Add todo</button>
      {
        todos.map((todo, index) => {
          return <Task key={index} updateTodo={setTodos} text={todo.text} todos={todos} finished={todo.finished} />
        })
      }
    </>
  )
}
