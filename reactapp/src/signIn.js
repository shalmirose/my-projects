import React from "react";
// import loginimages from "../src/images"
import axios from 'axios';
import HomePage from "./homepage";
import useNavigate from "react-router-dom"

const SignIn = () => {
    const fetchdata=async()=>{
        const response=await axios.get(" https://restcountries.com/v2/all?fields=name,region,flag ")
        console.log("response====>",response)
        if(response){
            <h1>{response.data}</h1>
        }
    }
  return (
    <div>
      <h1 style={{ textAlign: "left", marginLeft: 50, marginTop: 60 }}>
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
      onClick={fetchdata}
      >
        Sign In
      </button>
      {/* <img src="loginimages.jpeg" style={{height:40}}/> */}
    </div>
  );
};
export default SignIn;
