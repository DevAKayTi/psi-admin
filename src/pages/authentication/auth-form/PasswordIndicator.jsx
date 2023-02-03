import React from 'react';

const PasswordIndicator = ({passwordStrength}) => {

    const bgColor = passwordStrength.color;

  return (
    <div className='flex items-center'>
        <div className={`h-2 w-24 rounded-lg ${bgColor}`}></div>
        <h5 className='text-sm font-semibold pl-4'>{passwordStrength.label}</h5>
    </div>
  )
}

export default PasswordIndicator