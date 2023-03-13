import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './LoginPage.module.css';
import { login } from '../../api/auth.api';
const LoginPage = () => {

  const [userLoginData, setUserLoginData] = useState({email: '', pass:''})
  const [loginAlert, setLoginAlert] = useState('')

  function onLogin(e){
    e.preventDefault()
    const user = login(userLoginData.email,userLoginData.pass)

    if(user){
      // login correcto
      alert('LOGIN CORRECTO')
      setLoginAlert('')
    }
    else{
      // login incorrecto, limipo el formulario
      setUserLoginData({email: '', pass:''})
      setLoginAlert('Login incorrecto')
    }
  }

  return(
  <div className={styles.LoginPage}>
    <span style={{color: 'red'}}>{loginAlert}</span>
    <form>
      <fieldset>
        <legend>email</legend>
        <input value={userLoginData.email} onChange={(e)=>setUserLoginData({... userLoginData, email: e.target.value})} placeholder='email' />
      </fieldset>
      <fieldset>
        <legend>password</legend>
        <input value={userLoginData.pass} onChange={(e)=>setUserLoginData({... userLoginData, pass: e.target.value})} placeholder='password' type='password' />
      </fieldset>
      <button onClick={onLogin}>login</button>
    </form>
  </div>)
};

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;
