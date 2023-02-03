import React from 'react';

import { Link } from 'react-router-dom';

import AuthWrapper from './AuthWrapper'
import AuthLogin from './auth-form/AuthLogin';

import './auth-container.css';

const Login = () => {
  return (
    <AuthWrapper>
      <div className='auth-container p-6 rounded-lg m-6'>
        <div className='flex justify-between items-baseline'>
          <h3 className='text-3xl font-semibold'>Login</h3>
          <Link to={'/admin/register'} className="text-sky-600 text-sm">Don&apos;t have an account?</Link>
        </div>
        <div className='pt-6'>
          <AuthLogin/>
        </div>
      </div>
    </AuthWrapper>
  )
}

export default Login