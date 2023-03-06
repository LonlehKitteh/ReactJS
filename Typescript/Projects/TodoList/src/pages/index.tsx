import React from "react";
import { useTodo } from "../contexts/TodoContext";

export default function Home() {
    const { todos, addTask } = useTodo();

    const handleClick = () => {
        addTask({ name: "Next task1" });

        console.log(todos);
    };

    return <button onClick={handleClick}>Click Me</button>;
}
