import React from 'react'
import * as firebase from 'firebase/app'
export default class Dashboard extends React.Component{
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
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                 this.setState({
                    displayName : user.displayName,
                    email : user.email,
                    emailVerified : user.emailVerified,
                    photoUrl : user.photoURL,
                    isAnnymous : user.isAnnoymous,
                    uid : user.uid,
                    providerData : user.providerData,
                 })
            }
            else{
                this.props.history.push('/login');
            }
        })
    }
    
    render(){
        return(
            <h1 class='text-white'>Dashboard</h1>
        );
    }
}