import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoApp from '../Components/Logins/Logos/LogoApp';
import Title from '../Components/Logins/Titles/Titles';
import Button from '../Components/Logins/Button/Button';
import LoginInput from '../Components/Logins/LoginForm/LoginInput';
import NoAccount from '../Components//Logins/NoAccount/Noaccount';

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

  const validatePassword = (password) => {
    return String(password).length >= 8;
  };

  useEffect(() => {
    if (email.length > 0){ 
      setIsInvalid(!validateEmail(email));
    } else {
      setIsInvalid(false);
    } 
  },[email]);

  useEffect(() => {
  if(password.length > 0 && password.length < 8){ 
    setIsInvalid(!validatePassword(password));
  }else {
    setIsInvalid(false);
  }
  },[password]);

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post('https://localhost.4000/login/user', {
        client: {
          email:  '',
          password: '',
        }
      })
      .then((response) => {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        window.location = '/';
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  return (
  <main>
    <div className='container'>
      <LogoApp></LogoApp>
      <Title>Sign in</Title>    
      <LoginInput id='email' 
        type='text' 
        name='email' 
        placeholder='Enter your email'
        className="form-inputs" 
        value={email} 
        isInvalid={isInvalid}
        onChange={e => setEmail(e.target.value)
        }> 
        </LoginInput>
        
        <LoginInput id='password' 
        type="password"
        name="password"
        placeholder="Enter your password" 
        className="form-inputs"
        value={password}
        onChange={e => setPassword(e.target.value)} 
        />
       
      <Button onClick={submitForm}>Sign in</Button>     
      <NoAccount onSignUpClick={() => alert('sign up')}></NoAccount>
    </div>
  </main>
  );
}

export default LoginPage;