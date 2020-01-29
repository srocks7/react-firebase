import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import fire from './Fire'

export default class Login extends Component {

    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.signUp=this.signUp.bind(this);
       
        this.state={
          email:'',
          password:''
    
        }
      }
      login(e){
       e.preventDefault();
       fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
       }).catch((error)=>{
           console.log(error);
       });
      }
      signUp(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .catch((error)=>{
            console.log(error);
        });
       }
      handleChange(e){
          this.setState({[e.target.name] : e.target.value} );

      }

    render() {
        return (
            <div className="Border">
            <div className='form'>
              <Form>
                <FormGroup>
                  <Label className="font-weight-bold">Email</Label>
                  <Input value={this.state.email} onChange={this.handleChange} type='email' name='email' placeholder='email'/>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">Password</Label>
                  <Input value={this.state.password} onChange={this.handleChange} type='password' name='password' placeholder='password'/>
                </FormGroup>
                <FormGroup style={{textAlign:'center'}}>
                  <Button type='submit' onClick={this.login} color="success">Login</Button>
                  <Button style={{marginLeft:'10px'}} type='submit' onClick={this.signUp} color="primary">signUp</Button>
                </FormGroup>
              </Form>
      
            </div>
          </div>
        )
    }
}
