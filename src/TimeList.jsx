import { useContext } from "react";
import Item from "./item";
import { TestContext } from "./testContext";

const TimeList=()=>{
    const context=useContext(TestContext);
    return(
        <div className="main_time_list" style={{marginTop:"3.5cm",color:"black"}}>
            {context.timeArr.map((c)=>(
              <Item key={Math.random()}>{c}</Item> 
            ))}  
        </div>
    )
}
export default TimeList;
