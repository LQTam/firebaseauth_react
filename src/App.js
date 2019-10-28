import React from 'react';
import './App.css';
import './styles.css'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'
import {Route,Switch} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Nav from './components/Nav';
import Logout from './components/Logout';
import {AuthProvider} from './Auth'

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  githubProvider: new firebase.auth.GithubAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
}


function App(props) {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src="asdasd" className="App-logo" alt="logo" />
        {
          props.user
            ? <p>Hello, {props.user.displayName}</p>
            : <p>Please sign in.</p>
        }
        {
          props.user
            ? <button onClick={props.signOut}>Sign out</button>
            : <button onClick={props.signInWithGoogle}>Sign in with Google</button>
        }
      </header> */}
      <header>
        <Nav />      
      </header>
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/logout' component={Logout} />
        </Switch>
      </main>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
