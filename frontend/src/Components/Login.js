import React, { useState } from 'react'
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const onemailChange = () => {

  }
  const onpasswordChange = () => {

  }
  const Submithandler = () => {

  }
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor='email'>Enter email</label><br />
      <input className='' name='email' type="email" value={email} onChange={onemailChange}></input><br />
      <label htmlFor='pasword'>Enter password</label><br />
      <input className='' name='pass' type="password" value={password} onChange={onpasswordChange}></input><br />
      <button onClick={Submithandler}>Login</button><br />
      <Link to="/Register">Go To Register page</Link>
    </div >
  )
}

export { Login };