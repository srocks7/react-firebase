import React, { Component } from 'react'

import fire from './Fire'
import { Button, Input } from 'reactstrap'
import firebase  from 'firebase';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.logout=this.logout.bind(this);
        this.setvalue=this.setvalue.bind(this);
        this.handleChange=this.handleChange.bind(this);
    
        this.state={
            value:''
        }
        
       
        
      }
      logout(){
        fire.auth().signOut();
      }
      
    
    setvalue(){
        var fire=firebase.database().ref();
        fire.set ({
            players:{
               john:
                {
                    number: 1,
                    age:30
                },
               Amanda: {
                    number: 2,
                    age: 20
                 }
            }
           
         });
    }
    handleChange(e){
        this.setState({value: e.target.value});

    }
    render() {
        return (
            <div style={{textAlign:'center',width:'100%',maxWidth:'330px'}}>
                <h1>you are home</h1>
                <Button onClick={this.logout} className="btn btn-success">Logout</Button>
                <Input type='text' value={this.state.value} onChange={this.handleChange} placeholder='age...'/>
                <Button onClick={this.setvalue} className="btn btn-success">setage</Button>
            </div>
        )
    }
}
