import React from "react";
import { TodoProvider, useTodo } from "../contexts/TodoContext";

export default function Home() {
    const { todos, addTask } = useTodo();

    const handleClick = () => {
        const testingData = {
            name: "Test",
            id: 69,
            time: { startTime: 10, lasts: 2 },
        };

        addTask(testingData);

        console.log(addTask);
    };

    return (
        <TodoProvider>
            <button onClick={handleClick}>Click Me</button>
        </TodoProvider>
    );
}
