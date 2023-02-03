import React from 'react';


import AuthBackground from '../../assets/images/auth/AuthBackground';
import AuthCard from './AuthCard';

const AuthWrapper = ({children}) => {
  return (
    <div className='w-full h-full min-h-screen overflow-x-hidden relative'>
        <AuthBackground/>
        <div className='backdrop-blur-sm bg-transparent'>
            <div className='auth-logos pl-7 pt-7'>
                Logo
            </div>
            <div className='auth-form-container'>
                <div className='flex justify-center items-center w-full min-h-[calc(100vh-53px)] h-full'>
                    <AuthCard>{children}</AuthCard>
                </div>
            </div>
            <div>
                {/* <AuthFooter/> */}
            </div>
        </div>
    </div>
  )
}

export default AuthWrapper