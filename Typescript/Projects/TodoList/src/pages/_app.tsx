import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { initTodo, TodoProvider } from "../contexts/TodoContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <TodoProvider name={initTodo.name}>
            <Component {...pageProps} />
        </TodoProvider>
    );
}
