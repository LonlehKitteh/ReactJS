import React, {
    createContext,
    useReducer,
    ReactElement,
    useCallback,
    useContext,
} from "react";
import { ACTION_TYPES, Todo } from "../types/Context";

export const initTodo: Todo = { name: "test" };

type ReducerAction = {
    type: ACTION_TYPES;
    payload: Todo;
};

const reducer = (todos: Todo[], action: ReducerAction) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TASK:
            return [...todos, action.payload];
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
    todos: [initTodo],
    addTask: () => {},
};

export const TodoContext =
    createContext<UseTodoContextType>(initialContextState);

type ChildrenType = {
    children?: ReactElement | null;
};

export const TodoProvider = ({
    children,
    ...initTodo
}: ChildrenType & Todo) => {
    return (
        <TodoContext.Provider value={useTodoContext([initTodo])}>
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
