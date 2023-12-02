import React from 'react';
// import { createRoot } from 'react-dom/client';
import './style.css' 
import './ControlButtons.css'

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
startInterval=()=>{
    if (this.state.isStart===false) {
        this.setState({
            isStart:true
        })
        interval=setInterval(()=>{
            this.setState({
                second: this.state.second +1
            })
            if (this.state.second===60){
                this.setState({
                    second:0,
                    minute:this.state.minute +1,
    
                })
    
            }
            if (this.state.minute===60){
                this.setState({
                    minute:0,
                    hour:this.state.hour +1,
    
                })
    
            }
    
        },1000)
    }
}
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

render(){
    let h=this.state.hour
    let m=this.state.minute
    let s=this.state.second
    return(<>
          <h2 className="timer">
            {`${h>9?h:"0"+h}:${m>9?m:"0"+m}:${s>9?s:"0"+s}`}
          <div className='btn btn-grp'>
            
            <button className="btn btn-one btn-start" onClick={this.startInterval}>start</button>
            <button className="btn btn-two btn-stop" onClick={this.stopInterval}>stop</button>
            <button className="btn btn-three" onClick={this.resetInterval}>reset</button>
          </div>
          </h2>        
        </>
        )}}
export default Timer;