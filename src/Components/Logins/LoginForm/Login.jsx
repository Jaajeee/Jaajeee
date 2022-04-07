import React from 'react';

import '../logins.css';


const LoginInput = ({isInvalid = false, ...props}) => {
  return <>  
          <input className={isInvalid ? 'error' : ''} {...props} />
          {isInvalid && <div className='error-text'>Email is invalid</div>}
         </>
}

export default LoginInput;