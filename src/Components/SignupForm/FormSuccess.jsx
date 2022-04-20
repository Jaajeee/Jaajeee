import React from 'react';
import { Link } from 'react-router-dom';

import './FormSignup.css';
const FormSuccess = () => {
  return (
    <div className='form-content'>
      <h1 className='form-success'>Thank you for getting in touch!</h1>
      <h1 className='form-success'>We appreciate you joining us. Enjoy with [DJ.MAPP] </h1>
      <Link to="/">
        <button className="form-input-btn" >sign in</button>
      </Link>
    </div>
  );
};

export default FormSuccess;