
import './App.css';
import fire from './component/Fire'
import React, { Component } from 'react'
import Login from './component/Login';
import Home from './component/Home';

export default class App extends Component {


  constructor(props){
    super(props);
    
    this.state={
     user:[]

    }
  }
componentDidMount(){
  this.authListener();
}
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
   
      if(user){
        this.setState({user});
      
      }else{
        this.setState({user: null});
    
      }

    });
  }
  render() {
    return (
      <div>
     {this.state.user ? (<Home/>) : (<Login/>)}
     
    </div>
    )
  }
}


  



