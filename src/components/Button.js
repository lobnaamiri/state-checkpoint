import React from 'react';
import './App.css';
import sarra from './images/sarra.jpg'
import harold from './images/harold.jpg'
import daniel from './images/daniel.jpg'
export default class Button extends React.Component  {
    statesarra ={
      photo: sarra,harold,daniel
      title: "Sarra","Harold","Daniel"
      description:"I have a clear logical mind...","I am a highly competent IT..","I am a very competent"
    }
   
   
   render(){
     return ( 
       <div>
       <button 
         onClick={this.props.onclick(this.setState(
             photo:sarra,
             title:"sarra",
             description:"I have a clear logical mind...",
         ))}>
         sarra
       </button>
        <button 
          onClick={this.props.onclick(this.setState(
              photo:harold,
              title:"Harold",
              description:"I am a highly competent IT...",
          ))}>
          harold
        </button>
         <button 
           onClick={this.props.onclick(this.setState(
               photo:daniel,
               title:"Daniel",
               description:"I am a very competent...",
           ))}>
           daniel
         </button>   
         </div>
     )
       }
    }