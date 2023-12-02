import React from 'react';
import './style.css' 


class Hello extends React.Component{
    render(){
       
        return(  
            <div><h1>{this.props.title}</h1></div>          
            
        )
    }
}
export default Hello