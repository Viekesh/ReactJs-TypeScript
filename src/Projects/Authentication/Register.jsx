import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, database } from "../../FirebaseConfig";
import BottomNav from "../Portfolio/Navigation/BottomNav";
import TopNav from "../Portfolio/Navigation/TopNav";
import "./Auth.scss";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const userNavigateaftersignup = useNavigate();

  const { name, mobile, email, password, confirmPass } = formData;

  const handleFormData = (event) => {
    setFormData((previousState) => ({
      ...previousState,
      [event.target.id]: event.target.value,
    }));

    // console.log(formData);
  };

  // we creating this function for submitting the form data
  const submitFormData = async (event) => {
    // after creating the function (like this "const submitFormData = () => {}") go on to page and
    // click on signup button, when click on the function the page is refreshes
    // to prevent this page refresh we take "event" as a parameter and type "event.preventDefault"
    event.preventDefault();

    // now we need authenticate the user
    try {

      if (password !== confirmPass) {
        return alert("Password Not Match");
      }

      if (name && mobile && email && password && confirmPass) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;

        // Here we create the copy of our formData, we want to get all the things inside, so this is going
        // to be an object and we are going to spread the "formData" so we can get everything inside  from
        // "formData" and we can put it inside the variable "formDataCopy"
        const formDataCopy = { ...formData };

        // Now we can remove the password, we just use delete one user information that is a "password"
        delete formDataCopy.password;

        // Now we need to add that time when the user is registered (means we can save those time when the
        // user can register)

        // for saving the time we dont need to use the date contructor from JavaScript, there is a simpler
        // way in firebase. firebase gives us a method of server timestamp that is going to save the time
        // based on the server, and this is very precise saving actually.
        // we just add this "formDataCopy" to the another field called "timestamp" which is equal to
        // "serveTimestamp()" which is coming from firebase/firestore
        formDataCopy.timeStamp = serverTimestamp();

        // Now we have "formDataCopy" without password or with the timestamp, now we can actually save it
        // inside the database

        // So there is a method inside the firestore called "Set Doc", this is actually returns the
        // promise as well
        // we need to add await here and we used a "setDoc" and it was going to get a "doc" which is also
        // coming from firebase/firestore
        await setDoc(doc(database, "portfolioUsers", user.uid), {
          ...formDataCopy,
        });

        alert("Registration Successful");

        userNavigateaftersignup("/");

      } else {

        return alert("All Fields Are Mandatory");

      }

    } catch (error) {
      console.log(error.message);
      alert("There Is Some Error While SignUp The Form");
    }

  };

  return (
    <section className="sign_in">
      <TopNav />
      <BottomNav />
      <div className="page_heading">
        <h3>Sign-Up</h3>
      </div>

      {/* the form is going to call a function after calling and submit the form as well */}
      <form className="sign_in_form" onSubmit={submitFormData}>
        <input
          type="text"
          className="input_field"
          id="name"
          value={name}
          placeholder="Enter Your Full Name"
          onChange={handleFormData}
        />
        <input
          type="number"
          className="input_field"
          id="mobile"
          value={mobile}
          placeholder="Enter Your Mobile No."
          onChange={handleFormData}
        />
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
        <input
          type="password"
          className="input_field"
          id="confirmPass"
          placeholder="Confirm The Password"
          value={confirmPass}
          onChange={handleFormData}
        />

        {showPass ? (
          <AiFillEyeInvisible
            className="invisible_pass_register"
            onClick={() => setShowPass((prevState) => !prevState)}
          />
        ) : (
          <AiFillEye
            className="visible_pass_register"
            onClick={() => setShowPass((prevState) => !prevState)}
          />
        )}

        <div className="another_form_links">
          <NavLink to="/Auth">
            <button>SignIn</button>
          </NavLink>
          <NavLink to="/ForgotPass">
            <button>Forgot Password</button>
          </NavLink>
        </div>

        <div className="form_buttons">
          <button type="submit">SignUp</button>
        </div>
      </form>
    </section>
  );
};

export default Register;
