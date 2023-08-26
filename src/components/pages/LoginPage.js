import React, { useState } from "react";
import { Link } from "react-router-dom";

import Users from "../../data/users.json";
import "../../App.css";
import { createWebToken } from "../../utils/webtoken";
import { setCookie } from "../../utils/cookie";

export default function SignInPage() {
  const [authDetails, setAuthDetails] = useState({
    email: "",
    pass: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    //Next we need to check is the entered user email is present in database(users.json) or not
    const isPresent = Users.find((user) => user.email === authDetails.email);
    if (isPresent) {
      const isPasswordMatch = isPresent.password === authDetails.pass;
      if (isPasswordMatch) {
        console.log({ isPresent });
        //Create a web token
        setCookie("auth", isPresent.email);
        window.location.href = "/home";
      } else {
        alert("Invalid email or password");
      }
    } else {
      window.location.href = "/register";
    }
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Sign in to us</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email address</label>
          <br />
          <input
            type="email"
            value={authDetails.email}
            onChange={(e) => setAuthDetails({ ...authDetails, email: e.target.value })}
            name="Email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input
            type="password"
            value={authDetails.pass}
            onChange={(e) => setAuthDetails({ ...authDetails, pass: e.target.value })}
            name="password"
            required
          />
        </div>
        <div>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </div>
      </form>
      <footer>
        <div>
          First time? <Link to="/register">Create an account</Link>.
        </div>
        <div>
          <Link to="/">Back to Homepage</Link>.
        </div>
      </footer>
    </div>
  );
}
