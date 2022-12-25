import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BottomNav from "../Portfolio/Navigation/BottomNav";
import TopNav from "../Portfolio/Navigation/TopNav";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./Auth.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";

const Auth = () => {
  // the initial value of the "useState" hook is an object which is an empty string
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // to access the "formData" we need to destructure it, to destructure the
  // form data (email and password) we can add a bracket then assign the
  // form data to the properties of that backet
  const { email, password } = formData;

  const [signUp, setSignUp] = useState(false);

  const [showPass, setShowPass] = useState(false);

  const userNavigateAfterSignIn = useNavigate();

  // the parameter "event" gives us all the information that we are typing in the form
  const handleFormData = (event) => {
    // console.log(event.target.value);

    // we keep this previous state to keep the previous information (it is used to get the previous data)
    // id because we just say this input id is email or password
    setFormData((previousState) => ({
      // here we just get the previous state (preState) and just add the new one
      // here we have two input one is email and other is password
      // instead of getting just sending email, we just target the id of the input element (mention in the html element),
      // if we type in this input and if we type in the input related to the password, then we get password
      // so we just target id of the html element instead of just name
      ...previousState,

      // in order to get the id we type "event.target.id" equal to "event.target.value"
      // so whatever we type is going to be saved inside this formData
      [event.target.id]: event.target.value,
    }));

    console.log(formData);
  };

  
  const submitSignInForm = async (event) => {

    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // if the "userCredential.user" is true and it exist then we can just go to the home page
      if (userCredential.user) {
        alert("You Are Successfully SignIn");
        userNavigateAfterSignIn("/");
      }
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  return (
    <section className="auth y_axis_center">
      <TopNav />
      <BottomNav />

      {!signUp ? "Sign-In" : "Sign-Up"}

      <div className="page_heading">
        <h3>Sign-In</h3>
      </div>

      <form action="" className="sign_in_form" onSubmit={submitSignInForm}>
        <input
          type="email"
          className="input_field"
          id="email"
          value={email}
          placeholder="Enter Your Email"
          onChange={handleFormData}
        />
        <input
          type={showPass ? "text" : "password"}
          className="input_field"
          id="password"
          value={password}
          placeholder="Enter Your Password"
          onChange={handleFormData}
        />

        {showPass ? (
          <AiFillEyeInvisible
            className="invisible_pass"
            onClick={() => setShowPass((prevState) => !prevState)}
          />
        ) : (
          <AiFillEye
            className="visible_pass"
            onClick={() => setShowPass((prevState) => !prevState)}
          />
        )}

        <div className="another_form_links">
          <NavLink to="/Register">
            <button>Register</button>
          </NavLink>
          <NavLink to="/ForgotPass">
            <button>Forgot Password</button>
          </NavLink>
        </div>

        <div className="form_buttons">
          <button type="submit">SignIn</button>
        </div>
      </form>
    </section>
  );
};

export default Auth;
