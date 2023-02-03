import React, { useState } from 'react';

import './Button.css';

const Button = ({type,bgColor,children}) => {
 
  return (
    <button type={type} className={`buttons bg-blue-500 hover:bg-blue-700`}>{children}</button>
  )
}

export default Button