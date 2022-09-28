// import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "./../../firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  // const [authToken, setAuthToken] = useState();

  const logGoogleUser = async () => {
    const { /* response._ */ user } = await signInWithGooglePopup();
    console.log(user);
    // console.log(Response);
    createUserDocumentFromAuth(user); //userDocRef
    // setAuthToken(response);
  };

  return (
    <div className="sign-in-container">
      <div className="login-container">
        <h1>I already have an account</h1>
        <p>Sign in with your email and password</p>
        <form onSubmit={() => {}}>
          <input type="email" />
          <input type="password" />
          <button type="submit">SIGN IN</button>
        </form>
        <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE</button>
        {/* <button onClick={signInWithGoogleRedirect}>
          SIGN IN WITH GOOGLE REDIRECT
        </button> */}
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

// Google REDIRECT

// import {
//   auth,
//   signInWithGoogleRedirect,
// } from "./../../firebase/firebase.utils";

// import { getRedirectResult } from "firebase/auth";
// useEffect(() => {
//   async function redirectResults() {
//     const response = await getRedirectResult(auth);
//     console.log(response);
//     if (response) {
//       const _userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//   }
//   redirectResults();
// }, []);
