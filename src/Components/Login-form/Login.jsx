import "../../App.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email address first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent. Please check your inbox.");
    } catch (error) {
      alert("Error sending password reset email: " + error.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
        <br />
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
        <p>
          <button type="btn" onClick={handleForgotPassword}>
            Forgot Password?
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
