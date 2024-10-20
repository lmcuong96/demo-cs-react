// ChildComp.jsx
import {consumeContext, cs} from "cs-react";

export const ChildComp = () => cs(
    consumeContext("car"),
    ({car}) => (
        <div>
            <h3>Car type: {car.type}</h3>
        </div>
    )
);
