import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../../firebaseCon';
import "./Stylesheets/Auth.css";
import { useNavigate } from 'react-router-dom';
import Navigation from '../Components/Navigation';



const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPass: "",
}

const Auth = ({active, user, setActive, setUser }) => {

  const [state, setState] = useState(initialState);


  // This is for signIn and signUp functionality :
  const [signUp, setSignUp] = useState(false);

  // Destructuring all input fields in our state :
  const { firstname, lastname, email, password, confirmPass } = state;

  // console.log(state);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  };

  // console.log(handleChange);

  const handleAuth = async (event) => {

    event.preventDefault();

    if (!signUp) {

      if (email && password) {
        
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

        await updateProfile(user, { displayName: `${firstname}` })

        setActive("/BlogLandingPage");
        navigate("/BlogLandingPage");

      } else {

        return alert("All Fields Are Mandatory");

      }
    }
  };

  return (
    <>

      <Navigation active={active} setActive={setActive} user={user} setUser={setUser} />

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
            className={`btn ${!signUp ? "sign_in_btn" : "sign_up_btn"}`}
            type="submit"
          >
            {!signUp ? "SignIn" : "SignUp"}
          </button>

          {!signUp ? (
            <div>
              <p>
                Dont have an account &nbsp;
                <span className='span' onClick={() => setSignUp(true)}>
                  SignUp
                </span> &nbsp;
                here.
              </p>
            </div>
          ) : (
            <div>
              <p>
                Already have an account &nbsp;
                <span className='span' onClick={() => setSignUp(false)}>
                  SignIn
                </span> &nbsp;
                here.
              </p>
            </div>
          )}

        </form>

      </div>
    </>
  )
}

export default Auth;