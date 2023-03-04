import React, { useState, useContext } from "react";

interface MyContextType {
    todos: { name: string; date: number }[];
}

const defaultValue: MyContextType = {
    todos: [],
};

const TodoContext = React.createContext(defaultValue);

export function useTodo() {
    return useContext(TodoContext);
}

export default function TodoProvider() {
    return <div>TodoContext</div>;
}
