import React from 'react'

const Task = ({ updateTodo, text, todos, finished }) => {

    const finishedTodo = () => {
        const newTodos = todos.map(todo => {
            if (todo.text === text) return { ...todo, finished: true }
            return todo
        })
        updateTodo(newTodos)
    }
    const deleteTodo = () => {
        return updateTodo(prev => prev.filter(todo => todo.text !== text))
    }

    return (
        <div className={finished ? 'finished todo' : 'todo'}>
            <div>{text}</div>
            <div></div>
            <button onClick={finishedTodo}>Finished</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default Task