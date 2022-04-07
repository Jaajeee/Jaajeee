import React from 'react';
import { Link } from "react-router-dom";


import '../logins.css';

const NoAccount = ({ isLoggedIn = false, signUpPath= '/SignUp' }) => {

  if(isLoggedIn) return null;
  
  return (<div className='no-account'>
            Don’t have an account?
            <span className='bold SignUp'>
                <Link to={signUpPath} className='SignUp pointer'>Sign Up</Link>
            </span>
          </div>);
}

export default NoAccount;