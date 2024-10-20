import {consumeContext, cs, provideContext} from "cs-react";
import Comp from "./Comp.jsx";
import {useState} from "react";

export const ParentComp = () => {
    const [carType, setCarType] = useState("BMW");

    return cs(
        ({}, next) => provideContext("car", { type: carType }, next), // Vẫn dùng context từ cs-react

        consumeContext("car"),
        ({ car }) => (
            <div>
                <input
                    type="text"
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                />
                <Comp />
            </div>
        )
    );
}