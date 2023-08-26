import React from "react";
import { deleteCookie } from "../../utils/cookie";

export default function HomePage(props) {
  const handleLogout = () => {
    deleteCookie("auth");
    window.location.href = "/";
  };
  return (
    <div className="text-center">
      <h1 className="main-title home-page-title">welcome to our app {props.name}</h1>

      <button className="primary-button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
