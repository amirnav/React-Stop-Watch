import React,{useState} from 'react';
import './style.css' ;
import Hello from './Hello';
import Timer from './Timer';
import { TestContext } from './testContext';
import TimeList from './TimeList';


const App=()=>{
    const[title,setTitle]=useState("Project name: Stop Watch");
    const[isLight,setIsLight]=useState(false) ;
    const[timeArr,setTimeArr]=useState([]);
    const handleSetIsLight=()=>{
        setIsLight(!isLight)
        setTitle("Developed by: Amir Hossein Navazi")
    }
    return (
               <TestContext.Provider value={{
                  timeArr,
                  setTimeArr
               }}>
                  <><h1 className='header'> STOP WATCH</h1>                  
                  <div className='hello' style={{color:"rgb(101, 105, 136)"}}><Hello title={title}/>
                  <h4 style={{color:"grey"}}>Click on the timer for write the moment</h4></div>    
                  <div className="main" style={{background:isLight?"rgb(170, 134, 134)":"rgb(119, 100, 64)"}}>                
                     <Timer                        
                        isLight={isLight}
                        handleSetIsLight={handleSetIsLight}/> 
                  <TimeList />                        
                 </div>  
                 </>      
                 </TestContext.Provider>     
                 )
}
export default App;

// class App extends React.Component {
//     constructor(){
//         super();
//         this.state={
//             title:("Stop Watch")
//         }
//     }
//     handleSetTitle=()=>{
//         this.setState({
//             title:"Amir Hossein Navazi"
//         })
//     }
   
//     render(){
//         return (<><div className="main">
//             <Hello title={this.state.title}/>
            
//             <Timer handleSetTitle={this.handleSetTitle}/>            
//             </div>
            
//             </>

//             )
//         }
// }
