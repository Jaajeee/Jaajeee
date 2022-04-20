import React from 'react';

import '../logins.css';


const LoginInput = ({isInvalid = false, ...props}) => {
  return <>  
          <input className={isInvalid ? 'error' : ''} {...props} />
          {isInvalid && <div className='error-text'>Invalid Type</div>}
         </>
}

export default LoginInput;