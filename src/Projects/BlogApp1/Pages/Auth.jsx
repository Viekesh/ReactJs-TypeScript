import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../../firebaseConfig';
import "./Stylesheets/Auth.css";
import { useNavigate } from 'react-router-dom';



const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPass: "",
}

const Auth = ({setActive, setUser}) => {

  const [state, setState] = useState(initialState);

  const [signUp, setSignUp] = useState(false);

  const { firstname, lastname, email, password, confirmPass } = state;

  const navigate = useNavigate();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  };

  const handleAuth = async (event) => {
    event.preventDefault();

    if (!signUp) {

      if(email && password) {
        const { user } = await signInWithEmailAndPassword(auth, email, password);

        setUser(user);
        setActive("/BlogLandingPage");
        navigate("/BlogLandingPage");
        
      } else {
        return alert("All Fields Are Mandatory To Fill");
      }

    } else {
      if (password !== confirmPass) {
        return alert("Password Not Match");
      }

      if (firstname && lastname && email && password) {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(user, { displayName: `${firstname} ${lastname}` })

        setActive("/BlogLandingPage");
        navigate("/BlogLandingPage");
      } else {
         return alert("All Fields Are Mandatory");
      }
    }
  };

  return (
    <div className='auth'>

      <form className='profile' id='pfl' onSubmit={handleAuth}>
        {!signUp ? <h2>SignIn Here</h2> : <h2>SignUp Here</h2>}
        {signUp && (
          <>
            <input
              type="text"
              name='firstname'
              placeholder='Enter Your Firstname'
              value={firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              name='lastname'
              placeholder='Enter Your lasstname'
              value={lastname}
              onChange={handleChange}
            />
          </>
        )}
        <input
          type="email"
          name='email'
          placeholder='Enter Email Here'
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder='Enter Password Here'
          value={password}
          onChange={handleChange}
        />
        {signUp && (
          <>
            <input
              type="password"
              name='confirmPass'
              placeholder='Confirm The Password'
              value={confirmPass}
              onChange={handleChange}
            />
          </>
        )}

        <button
          className={`btn ${!signUp ? "signInBtn" : "signUpBtn"}`}
          type="submit"
        >
          {!signUp ? "signIn" : "signUp"}
        </button>

        {!signUp ? (
          <div>
            <p>
              Dont have an account &nbsp;
              <span onClick={() => setSignUp(true)}>
                SignUp
              </span> &nbsp;
              here.
            </p>
          </div>
        ) : (
          <div>
            <p>
              Already have an account &nbsp;
              <span onClick={() => setSignUp(false)}>
                SignIn
              </span> &nbsp; here.
            </p>
          </div>
        )}
      </form>

    </div>
  )
}

export default Auth;