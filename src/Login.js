import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyRV5QZ-iht4rQjIrxPYsNiVBlAfHby9fKsg&usqp=CAU"
          alt=""
        />
        <h1>Messenger</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
