import React, { Component } from 'react'
import firebase  from 'firebase';
import fire from './Fire'
import { Button } from 'reactstrap';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.signOut=this.signOut.bind(this)
        // this.getvalue=this.getvalue.bind(this)
        this.state={
                value:'',
                image:'',
                url:''
        }
    }
    signOut(){
        fire.auth().signOut();
    }

    // getvalue(){
    //     fire=firebase.database().ref().child('information');
    //     fire.on("value",snap =>{
    //         fire.innerText = JSON.stringify(snap.val(), null, 7)
    //     })
    // }
    componentWillMount(){
      var  fire=firebase.database().ref().child('information/-LzsrVEppgUhXd8EXBFP');
        fire.on('value', snap =>{
            this.setState({
                value : snap.val()
            })
        })
    }
    componentDidMount(){
        const ref = firebase.storage().ref("image/userpic.png");
        ref.getDownloadURL()
        .then(url => this.setState({url}))
        .catch(e=>{console.log(e);})
    }
    
   

    render() {
        return (
            
            <div className='profile-alignment'>
                <h1 style={{color:"white",textAlign:'center'}}>PROFILE</h1>
                <div className='profile-border'>
                <div className="profile-data">
               
                <table>
                    <tr >
                    <td className="pb-5" style={{position:'relative',left:'125px'}}><img src={this.state.url || "https://via.placeholder.com/100x100"} alt="2323" height="100"   width="100" roundedCircle /></td>
                    </tr>
                    
                    <tr>
                        <td className="pl-3 mt-3">Email:</td>
                        <td className="pl-3 mt-3">{this.state.value.email}</td>
                        
                    </tr>
                    <tr>
                    <td className="pl-3 mt-3">Address:</td>
                        <td className="pl-3 mt-3">{this.state.value.address}</td>
                    </tr>
                    <tr>
                    <td className="pl-3 mt-3">City:</td>
                        <td className="pl-3 mt-3">{this.state.value.city}</td>
                    </tr>
                    <tr>
                    <td className="pl-3 mt-3">State:</td>
                        <td className="pl-3 mt-3">{this.state.value.state}</td>
                    </tr>
                <tr>
                <td className="pl-3 mt-3">Zip:</td>
                        <td className="pl-3 mt-3">{this.state.value.zip}</td>
                </tr>
                
                </table>
                
                
                 
                </div>
               
                </div>
                <div style={{textAlign:'center'}}>
                <Button onClick={this.signOut} className='btn btn-success'>Signout</Button>
                </div>
                
            </div>
        )
    }
}
