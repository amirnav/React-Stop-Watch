import React from 'react';
import './style.css' 


class Hello extends React.Component{
    render(){
       
        return(  
            <div><h3>{this.props.title}</h3></div>          
            
        )
    }
}
export default Hello