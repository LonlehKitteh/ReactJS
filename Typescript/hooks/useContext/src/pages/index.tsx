import React from "react";
import Counter from "./Counter";
import { CounterProvider } from "../context/CounterContext";
import { initState } from "../context/CounterContext";

export default function Wrapper() {
    return (
        <React.Fragment>
            <CounterProvider count={initState.count} text={initState.text}>
                <Counter>
                    {(num: number) => (
                        <React.Fragment>Current Count: {num}</React.Fragment>
                    )}
                </Counter>
            </CounterProvider>
        </React.Fragment>
    );
}
