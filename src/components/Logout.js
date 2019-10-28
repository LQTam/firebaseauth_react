import React,{useEffect} from 'react'
import { withRouter, Redirect } from "react-router";
import * as firebase from 'firebase/app'

const Logout = ({history})=>{
    const handleLogout = async ()=>{
        try{
            await firebase.auth().signOut();
            history.push('/login');
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <button type='button' onClick={handleLogout}>Logout</button>
    )
}

export default withRouter(Logout);