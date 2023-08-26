import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage";
import HomePage from "./components/pages/HomePage";
import Users from "./data/users.json";

import "./App.css";
import { readCookie } from "./utils/cookie";

export default function App() {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    try {
      const authUser = readCookie("auth");
      const res = Users.find((user) => user.email === authUser);
      setLoggedUser(res);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  console.log("auth: ", { loggedUser });
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/forget-password" component={ForgetPasswordPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const Footer = () => {
  return (
    <p className="text-center" style={FooterStyle}>
      Designed & coded by{" "}
      <a href="https://izemspot.netlify.com" target="_blank" rel="noopener noreferrer">
        IZEMSPOT
      </a>
    </p>
  );
};

const FooterStyle = {
  background: "#222",
  fontSize: ".8rem",
  color: "#fff",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5",
};
