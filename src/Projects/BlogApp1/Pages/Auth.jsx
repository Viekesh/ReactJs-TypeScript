import React, { useState } from 'react';



const initialState = {
  email: "",
  password: "",
}

const Auth = () => {

  const [state, setState] = useState(initialState);

  const [signUp, setSignUp] = useState(false);

  const { email, password } = state;

  const handleChange = () => {

  }

  return (
    <div className='auth'>

      {!signUp ? "signIn" : "signUp"}

      <form className='profile' id='pfl' >
        <h2>LogIn Here</h2>
        <input
          type="email"
          name='email'
          id=''
          placeholder='Enter Email Here'
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder='Enter Password Here'
          value={password}
          onChange={handleChange}
        />
        <button className={`btn ${!signUp ? "signInBtn" : "signUpBtn"}`}
        type="submit"
        >
          {!signUp ? "signIn" : "signUp"}
        </button>
      </form>

      <div>
        {!signUp ? (
          <div>
            <p>Dont have an account <span>SignUp</span> here.</p>
          </div>
        ) : (
          <div>
            <p>Already have an account <span>SignIn</span>.</p>
          </div>
        )}
      </div>

    </div>
  )
}

export default Auth;