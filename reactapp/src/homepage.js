import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function FetchData(){
  const [records,setRecords]=useState([])
  useEffect(()=>{
    fetch("https://restcountries.com/v2/all?fields=name,region,flag")
    .then(response=>response.json())
    .then(data=>setRecords(data))
    .catch(err=>console.log(err))
  },[])
  return(
    <div>
      <ul>
        {records.map((list,index)=>(
          <div>
          <li key={index}>COUNTRY :{list.name}<br/>REGION :{list.region}<br/></li>
          <img src={list.flag} alt={list.flag}/>
          </div>
        ))}
      </ul>
    </div>
  )
}
export default FetchData