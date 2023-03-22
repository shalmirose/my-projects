import React from "react";
import axios from "axios";
import Chloe from "./Chloe.jpg";
import HomePage from "./homepage"
import {useNavigate} from "react-router-dom"

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ textAlign: "left", marginLeft: 50, marginTop: 100 }}>
        Sign In
      </h1>
      <h5 style={{ textAlign: "left", marginLeft: 50, marginTop: 20 }}>
        New user ? Create an account
      </h5>
      <input
        type="text"
        style={{ height: 30, width: "20%", marginLeft: 50 }}
        placeholder="Username or email"
      />
      <br />
      <input
        type="text"
        style={{ height: 30, width: "20%", marginLeft: 50, marginTop: 10 }}
        placeholder="Password"
      />
      <br />
      <input type="checkbox" style={{ marginLeft: 50, marginTop: 10 }} />
      Keep me signed in
      <br />
      <button
        type="submit"
        style={{
          backgroundColor: "grey",
          height: 30,
          width: "20%",
          marginLeft: 50,
          marginTop: 10,
          fontSize: 15,
          fontWeight: "bold",
        }}
        onClick={()=>navigate("/homepage")}
      >
        Sign In
      </button>
      <div>
        <img
          src={Chloe}
          style={{
            height: 300,
            float: "right",
            width: 270,
            margin: 7,
            marginRight: 500,
            marginTop: 2,
            padding:2,
          }}
        />
      </div>
    </div>
  );
};
export default SignIn;
