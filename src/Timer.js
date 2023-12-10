import React from 'react';
import './style.css' ;
import './ControlButtons.css';
import logo from "./watch.png"
import { TestContext } from './testContext';

var interval;
class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            hour:0,
            minute:0,
            second:0,
            isStart:false
        }
    }

static contextType=TestContext;  

startInterval=()=>{
    if (this.state.isStart===false) {
        this.setState({
            isStart:true
        })
        interval=setInterval(()=>{
            this.setState({
                second: this.state.second +1
            })
            if (this.state.second===59){
                this.setState({
                    second:0,
                    minute:this.state.minute +1,
    
                })}
            if (this.state.minute===59){
                this.setState({
                    minute:0,
                    hour:this.state.hour +1,    
                })    
            }
    
        },1000)
    }}
stopInterval=()=>{
    this.setState({
        isStart:false
    })
    clearInterval(interval)
}
resetInterval=()=>{
this.stopInterval();
this.setState({
    hour:0,
    minute:0,
    second:0,
})
}
handleSaveTime=()=>{
    let newTime=document.querySelector('.timer').innerHTML;
    this.context.setTimeArr([...this.context.timeArr,newTime]) 
}

render(){
    let h=this.state.hour
    let m=this.state.minute
    let s=this.state.second
    return(<>
          <img src={logo} alt='Logo' style={{width:"400px",height:"400px",marginLeft:"2.3cm",marginTop:"0.13cm"}}></img>
         
          <h2 className="timer" onClick={this.handleSaveTime}>
            {`${h>9?h:"0"+h}:${m>9?m:"0"+m}:${s>9?s:"0"+s}`}
            </h2> 
          <div className='btn btn-grp'>                       
            <span className="btn btn-one btn-start" onClick={this.startInterval}>start</span>
            <span className="btn btn-two btn-stop" onClick={this.stopInterval}>stop</span>
            <span className="btn btn-three" onClick={this.resetInterval}>reset</span>            
          </div>  
          <div className='btn btn-grp'>                       
            <button className="btn btn-four" is onClick={this.props.handleSetIsLight} style={{marginTop:"6.5cm",background:this.props.isLight?"#0d043f":"rgb(199, 202, 31)"}}>Developed by:</button>           
          </div>
        </> )}}
export default Timer;