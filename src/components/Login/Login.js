import React, { useState } from "react";
import "./Login.css";
import useFormInput from "../../hooks/useFormInput";
import data from "../../data/users.json";

function Login({ setLoggedIn, history }) {
  const [error, setError] = useState(false);
  const [username, setUsername, resetUsername] = useFormInput("");
  const [password, setPassword, resetPassword] = useFormInput("");

  const resetForm = () => {
    resetUsername();
    resetPassword();
  };

  const validateUser = () => {
    const isPresent = data["users"].some(
      (obj) =>
        obj.username.trim() === username.trim() &&
        obj.password.trim() === password.trim()
    );

    if (isPresent) {
      setLoggedIn(true) && setError(false);
      history.push("/");
    } else setError(true);
  };

  return (
    <div className="Login">
      <h2 className="Login-title">Login</h2>

      <form
        className="Login-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!username.trim() || !password.trim()) {
            return;
          }

          validateUser();
          resetForm();
        }}
      >
        <div className="Login-field">
          <label>Username: </label>
          <input
            type="text"
            className="Login-username"
            value={username}
            onChange={setUsername}
            placeholder="Enter username"
          />
        </div>

        <div className="Login-field">
          <label>Password: </label>
          <input
            type="password"
            className="Login-password"
            value={password}
            onChange={setPassword}
            placeholder="Enter password"
          />
        </div>

        <button className="Login-submit" type="submit">
          Login
        </button>

        {error && <div className="Login-error">Invalid username/password</div>}
      </form>
    </div>
  );
}

export default Login;
