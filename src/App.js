import React from 'react';
import './App.css';
import sarra from './images/sarra.jpg'
import harold from './images/harold.jpg'
import daniel from './images/daniel.jpg'
export default class Button extends React.Component  {
    state ={
      photo: sarra,
      title: "Sarra",
      description:"I have a clear logical mind...",
      buttonName:"Sarra",
    }
   
   
   render(){
     return ( 
       <div className="affich">
    <>
       <button onClick={()=>{
         this.setState({title:'Sarra'})
         this.setState({photo:sarra})
         this.setState({description:'I have a clear logical mind...'})
       }}>
        {this.state.buttonName}
       </button>
      <button   onClick={()=>{
         this.setState({title:'Harold'})
         this.setState({photo:harold})
         this.setState({description:'kdLJDizejdj...'})
         }}>     
     {this.setState.buttonName='Harold'}

     </button>
     <button onClick={()=>{
       this.setState({title:'Daniel'})
       this.setState({photo:daniel})
       this.setState({description:'jjjjjjjjjjjjjjjjj..'})
       }}>
       
      
      {this.setState.buttonName="Daniel"}

     </button> 
     <h1>{this.state.title}</h1>
         <img src={this.state.photo} alt=""/>
       <p>{this.state.description}</p>
  </>
  </div>
         )
  
         
       }
      
    }