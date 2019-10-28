import React from 'react'
import * as firebase from 'firebase/app'

const signUp = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(res => {
            this.props.history.push('/login');
            console.log(res);
        })
        .catch(function (err) {
            var errCode = err.code;
            var errMes = err.message;
            console.log(err);
        })
}
export default () => {
    
    return (
        <div className="container">
            <div className="col-md-6 mx-auto text-center">
                <div className="header-title">
                    <h1 className="wv-heading--title">
                        Check out — it’s free!
              </h1>
                    <h2 className="wv-heading--subtitle">
                        Lorem ipsum dolor sit amet! Neque porro quisquam est qui do dolor amet, adipisci velit...
              </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="myform form ">
                        <form action="#" onSubmit={signUp}>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control my-input" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control my-input" id="name" placeholder="Password" />
                            </div>
                            {/* <div className="form-group">
                                        <input type="number" min={0} name="phone" id="phone" className="form-control my-input" placeholder="Phone" />
                                    </div> */}
                            <div className="text-center ">
                                <button type="submit" className=" btn btn-block send-button btn-secondary tx-tfm">Create Your Free Account</button>
                            </div>
                            <div className="col-md-12 ">
                                <div className="login-or">
                                    <hr className="hr-or" />
                                    <span className="span-or text-white">or</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <a className="btn btn-block g-button btn-primary" href="#">
                                    <i className="fa fa-google" /> Sign up with Google
                    </a>
                            </div>
                            <p className="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="#" className="ps-hero__content__link">Terms&nbsp;of&nbsp;Use</a> and <a href="#">Privacy&nbsp;Policy</a>.
                  </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
