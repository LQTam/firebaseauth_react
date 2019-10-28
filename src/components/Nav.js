import React from 'react'
import {Link } from 'react-router-dom'
import * as firebase from 'firebase/app'

export default class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            displayName:'',
            emai:'',
            emailVerifie:'',
            photoUr:'',
            isAnnymou:'',
            ui:'',
            providerDat:'',
        }
    }
    componentDidMount() {
        // firebase.auth().onAuthStateChanged((user)=>{
        //     if(user){
        //          this.setState({
        //             displayName : user.displayName,
        //             email : user.email,
        //             emailVerified : user.emailVerified,
        //             photoUrl : user.photoURL,
        //             isAnnymous : user.isAnnoymous,
        //             uid : user.uid,
        //             providerData : user.providerData,
        //          })
        //     }
        //     else{
        //         this.props.location.push('/login');
        //     }
        // })
        console.log(window.user);
    }
    
    render(){
        return (
            <nav className="nav justify-content-center">
                <Link className="nav-link active" to="/">Home</Link>
                <Link className="nav-link active" to="/dashboard">Dashboard</Link>
                { this.state.email ? <Link className="nav-link" to="/login">Login</Link>
                : <Link className = 'nav-link' to='/logout' >Logout</Link>
                }
                <Link className="nav-link" to="register">Register</Link>
            </nav>
        )
    }
}