import React from 'react';
import './style.css' ;
import Hello from './Hello';
import Timer from './Timer';

class App extends React.Component {
    constructor(){
        super();
        this.state={
            title:("Stop Watch")
        }
    }
    handleSetTitle=()=>{
        this.setState({
            title:"Amir Hossein Navazi"
        })
    }
   
    render(){
        return (<><div className="main">
            <Hello title={this.state.title}/>
            
            <Timer handleSetTitle={this.handleSetTitle}/>            
            </div>
            
            </>

            )
        }
}

export default App;
