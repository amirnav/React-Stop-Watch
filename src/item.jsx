import { useContext } from "react";
import{TestContext} from"./testContext";

const Item=(props)=>{
    const context=useContext(TestContext);
    const handleDeletItem=(e)=>{
        
        context.setTimeArr(context.timeArr.filter(t=>t!==e.target.innerHTML))
    }
    return(
        <div onClick={handleDeletItem}>
            {props.children}
        </div>

    )
}
export default Item;