import React, { useState, useEffect } from 'react';
import Navbar from './../../Components/Layout/Navbar';
import './style.css';
import LoginVerification from './Components/LoginVerification';

export default function Login(props) {
  const [values, setValues] = useState({
    login:'',
    tipoDeLogin: '',
  });
//HANDLE CHANGE
const handleChange = name => event => {
  switch(name) {
    default:
      return setValues({ ...values, [name]: event.target.value });
  }
};

  return (
    <>
      <Navbar path={props.match.path} />
      <div className="pageLogin">
        <div className="card">
          <div className="progressTopCard">
            <div className="progress"></div>
          </div>
          <div className="cardBody">
            <LoginVerification />
          </div>
        </div>
      </div>
    </>
  );
}