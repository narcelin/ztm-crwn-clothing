const SignIn = () => {
  return (
    <div className="sign-in-container">
      <div className="login-container">
        <h1>I already have an account</h1>
        <p>Sign in with your email and password</p>
        <form action="">
          <input type="email" />
          <input type="password" />
        </form>
        <button>SIGN IN</button>
        <button>SIGN IN WITH GOOGLE</button>
      </div>
      <div className="new-sign-in-container">
        <h1>I do not have an account</h1>
        <p>Sign up with your email and password</p>
        <form action="">
          <input type="text" />
          <input type="email" />
          <input type="password" />
          <input type="password" />
        </form>
        <button>SIGN UP</button>
      </div>
    </div>
  );
};

export default SignIn;
