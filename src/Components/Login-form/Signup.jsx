import "../../App.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Signup</h2>
        <label htmlFor="Email">
          Email:
          <input type="text" />
        </label>
        <label htmlFor="Password">
          Password:
          <input type="password" />
        </label>
        <button type="submit">Signup</button>
        <p>
          Already Registered?<a>Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
