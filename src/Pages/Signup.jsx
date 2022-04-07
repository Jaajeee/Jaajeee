import React from "react";
import { Link } from "react-router-dom";
import { IconName } from "react-icons/fa";

import Title from '../Components/Logins/Titles/Titles';
import Button from '../Components//Logins/Button/Button';
import Input from '../Components/Logins/LoginForm/Login';
import NoAccount from '../Components/Logins/NoAccount/Noaccount';
import GoogleButton from '../Components/Logins/GoogleButton/Googlebutton';

import '../Components/Logins/logins.css';

const SignUpPage = () => {
    return (
        <>
        <main>
            <Link to="/">Back</Link>  
            <div className='container' style={{ paddingTop: '1.2rem' }}>  
                <Title>Sign up</Title>       
                <input id='email' 
                type='email' name='email' 
                placeholder='Enter your email' 
                className="form-input-signUp"/>
                <input id='password' 
                type='password' name='password' 
                placeholder='Enter your password'
                className="form-input-signUp"/>
                <input id='password2' 
                type='password' name='password' 
                placeholder='Confirm your password'
                className="form-input-signUp"/>
                <Button>Sign up</Button>   
            </div>
        </main> 
        </>
    );
};
export default SignUpPage;