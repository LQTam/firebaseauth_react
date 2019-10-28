import React,{ useEffect, useState }  from 'react'
import * as firebase from 'firebase/app'

export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         firebase.auth().onAuthStateChanged(setCurrentUser);
//     },[]);
  
//     return (
//       <AuthContext.Provider
//         value={{
//           currentUser
//         }}
//       >
//         {children}
//       </AuthContext.Provider>
//     );
//   };

export default class AuthProvider extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      currentUser:null,
    }
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged();
  }
}