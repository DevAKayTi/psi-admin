import React from 'react';

import './FormInput.css';

const FormInput = ({type,id,name,value,placeholder,onChange,onBlur,error}) => {
  return (
    <div className={`form-inputs ${error && 'error'}`}>
        <input 
            type={type} 
            id={id} 
            name={name} 
            value={value} 
            placeholder={placeholder} 
            onChange={onChange} 
            onBlur={onBlur} />
    </div>
  )
}

export default FormInput;
