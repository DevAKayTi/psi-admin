import React from 'react';
import { Link } from 'react-router-dom';

// component
import AuthRegister from './auth-form/AuthRegister';
import AuthWrapper from './AuthWrapper';

import './auth-container.css';

const Register = () => {
  return (
    <AuthWrapper>
      <div className='auth-container my-14 p-6 rounded-lg m-6'>
        <div className='flex justify-between items-baseline'>
          <h3 className='text-3xl font-semibold'>Sign up</h3>
          <Link to={'/admin/login'} className="text-sky-600 text-sm">Already have an account?</Link>
        </div>
        <div className='pt-6'>
          <AuthRegister/>
        </div>
      </div>
    </AuthWrapper>
  )
}

export default Register