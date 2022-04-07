import React, { useEffect, useState } from 'react';

import LogoApp from '../Components/Logins/Logos/LogoApp';
import Title from '../Components/Logins/Titles/Titles';
import Button from '../Components/Logins/Button/Button';
import LoginInput from '../Components/Logins/LoginForm/Login';
import NoAccount from '../Components//Logins/NoAccount/Noaccount';
import GoogleButton from '../Components//Logins/GoogleButton/Googlebutton';


import '../Components/Logins/logins.css';

const LoginPage = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
  useEffect(() => {
    if(email.length > 0){ 
      setIsInvalid(!validateEmail(email));
    } else {
      setIsInvalid(false);
    }
  },[email]);
  
  return (
  <main>
    <div className='container'>
      <LogoApp />  
      <Title>Login</Title>    
      <LoginInput id='email' 
        type='text' 
        name='email' 
        placeholder='Enter your email'
        className="form-inputs" 
        value={email} 
        isInvalid={isInvalid}
        onChange={e => setEmail(e.target.value)}
        > 
        </LoginInput>
        <LoginInput id='password' 
        type="password"
        name="password"
        className="form-inputs"
        placeholder="Enter your password"  />
        
      <Button>Login</Button>
      <GoogleButton />       
      <NoAccount onSignUpClick={() => alert('sign up')}/>
    </div>
  </main>
  );
}

export default LoginPage;