import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
export const Register = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [password, setpassword] = useState("");
  const onfnameChange = (event) => {
    setfname(event.target.value);
  }
  const onlnameChange = (event) => {
    setlname(event.target.value);
  }
  const onpassChange = (event) => {
    setpassword(event.target.value);
  }
  const onemailChange = (event) => {
    setemail(event.target.value);
  }
  const onAgechange = (event) => {
    setage(event.target.value);
  }
  const RegUser = async () => {
    var config = {
      method: 'post',
      url: 'http://localhost:8000/register',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        'firstname': fname,
        'lastname': lname,
        'password': password,
        'email': email,
        'age': age
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (

    < div >
      <label htmlFor="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" onChange={onfnameChange} value={fname}></input><br />
      <label htmlFor="lname">lastname</label><br />
      <input type="text" id="lname" name="lname" onChange={onlnameChange} value={lname}></input><br />
      <label htmlFor="password">password</label><br />
      <input type="password" id="password" name="password" onChange={onpassChange} value={password}></input><br />
      <label htmlFor="email">email</label><br />
      <input type="email" id="email" name="email" onChange={onemailChange} value={email}></input><br />
      <label htmlFor="lname">age</label><br />
      <input type="number" id="age" name="age" onChange={onAgechange} value={age}></input><br />
      <button onClick={RegUser}>Register Me</button>
      <Link to="/login">Go To Login page</Link>
    </div >
  )
}
