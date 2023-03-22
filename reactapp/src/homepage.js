import React from "react";
import axios from "axios";
const HomePage = () => {
  const fetchdata = async () => {
    const response = await axios.get(
      " https://restcountries.com/v2/all?fields=name,region,flag "
    );
    console.log("response====>", response);
    // <h2>{fetchdata}</h2>;
  };
  return (
    <div>
      <h1>Countries</h1>
      <button onClick={fetchdata}>get countries</button>
      <h2>{fetchdata.data}</h2>
    </div>
  );
};
export default HomePage;
