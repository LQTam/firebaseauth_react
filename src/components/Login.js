import React from 'react'
import * as firebase from 'firebase/app'
const login = async event=>{
    event.preventDefault();
    const {email,password} = event.target.elements;
    console.log(this.state);
    try{
        await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        this.props.history.push('/dashboard');
        // console.log(res);
    }
    catch(err){
        console.log(err);
    }
    
}
export default ()=>{
    
        return (
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign In</h3>
                            <div className="d-flex justify-content-end social_icon">
                                {/* <button onClick={props.signInWithGoogle} style={{margin:"0",padding:'0'}}><span><i className="fab fa-facebook-square" /></span></button> */}
                                <span><i className="fab fa-facebook-square" /></span>
                                <span><i className="fab fa-google-plus-square" /></span>
                                <span><i className="fab fa-twitter-square" /></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <form action="#" onSubmit={(event) => this.login(event)}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user" /></span>
                                    </div>
                                    <input type="email" className="form-control" name='email'  placeholder="Email" />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key" /></span>
                                    </div>
                                    <input type="password" className="form-control" name='password'  placeholder="Passwprd" />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox" name='remember'/>Remember Me
                                </div>
                                <div className="form-group">
                                    <input type="submit" defaultValue="Login" className="btn float-right login_btn" />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href="#">Sign Up</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
