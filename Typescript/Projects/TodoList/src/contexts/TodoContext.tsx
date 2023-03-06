import React, { useReducer, ReactNode, useCallback, useContext } from "react";

type Todo = {
    name: string;
    id: number;
    time: {
        startTime: number;
        lasts: number;
    };
};

const initialValues: Todo[] = [];

export const enum ACTION_TYPES {
    ADD_TASK = "ADD_TASK",
    REMOVE_TASK = "REMOVE_TASK",
}

type ReducerAction = {
    type: ACTION_TYPES;
    payload: Todo;
};

const reducer = (todos: Todo[], action: ReducerAction) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TASK:
            return [...todos, action.payload];
        case ACTION_TYPES.REMOVE_TASK:
            return todos.filter((todo) => todo.id !== action.payload.id);
        default:
            throw new Error("Error");
    }
};

const useTodoContext = (initialValues: Todo[]) => {
    const [todos, dispatch] = useReducer(reducer, initialValues);

    const addTask = useCallback(
        (task: Todo) =>
            dispatch({ type: ACTION_TYPES.ADD_TASK, payload: task }),
        []
    );

    return { todos, addTask };
};

type UseTodoContextType = ReturnType<typeof useTodoContext>;

const initialContextState: UseTodoContextType = {
    todos: [],
    addTask: () => {},
};

export const TodoContext =
    React.createContext<UseTodoContextType>(initialContextState);

type Props = {
    children: ReactNode | null;
};

export const TodoProvider: React.FC<Props> = ({ children }) => {
    return (
        <TodoContext.Provider value={useTodoContext(initialValues)}>
            {children}
        </TodoContext.Provider>
    );
};

type UseTodoHookType = {
    todos: Todo[];
    addTask: (task: Todo) => void;
};

export const useTodo = (): UseTodoHookType => {
    const { todos, addTask } = useContext(TodoContext);

    return { todos, addTask };
};
