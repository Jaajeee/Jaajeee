import React from 'react';
import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'


// import './FormSignup.css';
const FormSuccess = () => {
  // const MySwal = withReactContent(Swal)
  // MySwal.fire({
  //   title: <p>Hello World</p>,
  //   footer: 'Copyright 2018',
  //   didOpen: () => {
  //     MySwal.clickConfirm()
  //   }
  // }).then(() => {
  //   return MySwal.fire(<p>Shorthand works too</p>)
  // })
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