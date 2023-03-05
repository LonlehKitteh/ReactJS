import React from "react";
import Counter from "./Counter";

export default function Wrapper() {
    return (
        <React.Fragment>
            <Counter>
                {(num: number) => (
                    <React.Fragment>Current Count: {num}</React.Fragment>
                )}
            </Counter>
        </React.Fragment>
    );
}
