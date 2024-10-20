import {ChildComp} from "./ChildComp.jsx";
const Comp = () => {
    console.log("comp render");

    return (
      <>
          <ChildComp/>
      </>
    )
}
export default Comp;