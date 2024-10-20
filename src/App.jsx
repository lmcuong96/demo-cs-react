import { cs,State } from "cs-react";
import {ParentComp} from "./ParentComp.jsx";

const App = () => cs(
    ["count", ({}, next) => State({initValue: 0, next})],

    ({count})=>(
        <div style={ {width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", flexDirection: "column"}}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center"}}>
                Count: {count.value}
                <input type="text" value={count.value}
                       onChange={(e)=> count.onChange(Number(e.target.value))}/>
                <button onClick={() => count.change(v=> v+1)}>+</button>
                <button onClick={() => count.change(v=> v-1)}>-</button>
            </div>
            <ParentComp/>
        </div>
    ),
);
export default App;
