import React from 'react';

import '../../Logins/logins.css';

const Title = ({ children, title }) => {
  return <h1 className='title'>{children || title}</h1>;
}

export default Title;