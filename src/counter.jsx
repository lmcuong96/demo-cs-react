import {IgnoreUpdate} from "./cs-react/ignore-update.js";
import  { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const toggleDisabled = () => {
        setDisabled(prevDisabled => !prevDisabled);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={toggleDisabled}>
                {disabled ? "Enable" : "Disable"} IgnoreUpdate
            </button>
            <IgnoreUpdate
                // next={() => <p>Child Component Count: {count}</p>}
                onRender={() => console.log("Child component is rendering...")}
                disabled={disabled}
            />
        </div>
    );
};

export default Counter;
