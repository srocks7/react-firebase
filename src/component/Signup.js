import React, { Component } from 'react'
import fire from './Fire'
import { Button , Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import firebase  from 'firebase';


export default class Signup extends Component {
    constructor(props){
        super(props);
        this.setvalue=this.setvalue.bind(this);
        this.handleEmail=this.handleEmail.bind(this);
        this.handleAddress=this.handleAddress.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleCity=this.handleCity.bind(this);
        this.handleState=this.handleState.bind(this);
        this.handleZip=this.handleZip.bind(this);
        this.signUp=this.signUp.bind(this);
        
        this.state={
            email:'',
            password:'',
            address:'',
            city:'',
            state:'',
            zip:'',
            setemail:'',
            setpassword:''

        }
        
      }
      
      signUp(){
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(
          alert("Account Created")
        )
        .catch((error)=>{
            console.log(error);
        });
        this.setvalue()
       }

    setvalue(){
      
        var fire=firebase.database().ref().child('information');
        var newfire =fire.push();
        newfire.set ({
            
                email: this.state.email,
                password:this.state.password,
                address:this.state.address,
                city:this.state.city,
                state:this.state.state,
                zip:this.state.zip
            
           
         });
        
    }
    
    handleEmail(e){
        this.setState({[e.target.name] : e.target.value} );
    }
    handleAddress(e){
        this.setState({[e.target.name] : e.target.value} );
    }
    handlePassword(e){
        this.setState({[e.target.name] : e.target.value} );
    }
    handleCity(e){
        this.setState({[e.target.name] : e.target.value} );
    }
    handleState(e){
        this.setState({[e.target.name] : e.target.value} );
    }
    handleZip(e){
        this.setState({[e.target.name] : e.target.value} );
    }
    render() {
        return (
          <div>
          <div className='right-alignment'>
          <div className="signup-alignment">
            <h5 style={{position:'relative', bottom:'35px',color:"rgb(237,244,197)",fontFamily:'Arial',fontWeight:'bold'}}>SIGNUP FIREBASE ACCOUNT</h5>
         <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" value={this.state.email} onChange={this.handleEmail} placeholder="email " />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password"  value={this.state.password} onChange={this.handlePassword} placeholder="password" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" value={this.state.address} onChange={this.handleAddress}  placeholder="1234 Main St"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city"  value={this.state.city} onChange={this.handleCity}/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state"  value={this.state.state} onChange={this.handleState}/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip"  value={this.state.zip} onChange={this.handleZip}/>
          </FormGroup>  
        </Col>
      </Row>
      <Button  onClick={this.signUp} className="btn btn-success">SignUp</Button>
     
    </Form>
            </div>
            </div>
            </div>
        )
    }
}
