import './App.css';
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from './firebase';
import { provider } from './auth/facebook_provider';

function App() {

  const signInWithFacebook = () => {
   signInWithPopup(auth, provider)
     .then((result) => {
       const user = result.user;
       console.log("user: ", user);
       const credential = FacebookAuthProvider.credentialFromResult(result);
       const accessToken = credential.accessToken;
       console.log("Access Token: ", accessToken);
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       const email = error.customData.email;
       const credential = FacebookAuthProvider.credentialFromError(error);
      console.error("code: ", errorCode);
      console.error("message: ", errorMessage);
      console.error("email: ", email);
      console.error("credential: ", credential);
     });
  }


  return (
    <div className="App">
      <button onClick={signInWithFacebook}>Login Facebook</button>
    </div>
  );
}

export default App;
