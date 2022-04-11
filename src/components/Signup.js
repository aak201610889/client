import React, { useState } from "react";
import "./signup.css";
function Signup() {
  const [sign, setsign] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  return (
    <div
      style={{
        backgroundImage: `url(./images/bbb.jpg)`,
        backgroundSize: "cover",
      }}
      className="signup"
    >
      <form className="signup_form">
        <h1>Signup</h1>
        <div className="names">
          <input
            type="text"
            placeholder="First name"
            onChange={(e) => {
              setsign({ ...sign, fname: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="second name"
            onChange={(e) => {
              setsign({ ...sign, lname: e.target.value });
            }}
          />
        </div>

        <input
          type="text"
          placeholder="Email Address ..."
          onChange={(e) => {
            setsign({ ...sign, email: e.target.value });
          }}
        />

        <input
          type="text"
          placeholder="password ..."
          onChange={(e) => {
            setsign({ ...sign, password: e.target.value });
          }}
        />

        <button
          onClick={() => {
            console.log(sign);
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
