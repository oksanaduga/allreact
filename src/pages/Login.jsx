import React, { useContext } from "react";
import MyButton from "../components/ui/button/MyButton";
import MyInput from "../components/ui/input/MyInput"

import {AuthContext} from '../context'

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = event => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

	return (
    <div>
      <h1>
        Login page
      </h1>
      <form onSubmit={login}>
        <MyInput type='text' placeholder='login'/>
        <MyInput type='password ' placeholder='password'/>
        <MyButton>Enter</MyButton>
      </form>
    </div>
	)
}

export default Login