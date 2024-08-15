import "../../App.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Successful");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label htmlFor="email">
          Email:
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Signup</button>
        <br />
        <p>
          Already Registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
