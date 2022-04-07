import React from 'react';
import '../logins.css';
import { FaGoogle } from "react-icons/fa";

const GoogleButton = ({ children, title }) => {
  const loginWithGoogle = () => {
    window.open('https://www.google.com');
  }

  return <FaGoogle className='google-btn' alt='google' onClick={loginWithGoogle} />;
}

export default GoogleButton;