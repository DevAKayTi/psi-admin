import React, { useState,useEffect } from 'react'

import { Link } from 'react-router-dom';

// component
import PasswordIndicator from './PasswordIndicator';
import {FormInput} from '../../../components/form';
import { strengthColor, strengthIndicator } from '../../../utils/passwordStrength';
import AnimateButton from '../../../components/animation/AnimateButton';
import Button from '../../../components/animation/Button';
import FireBaseSocial from './FireBaseSocial';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

import './AuthInput.css';

const AuthRegister = () => {

    

    const [showPassword,setShowPassword] = useState(false);
    const [level,setLevel] = useState({ label: 'Poor', color: 'bg-red-500' });

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('');
    }, []);


  return (
    <>
        <Formik
            initialValues={{ 
                firstName:'Joe',
                lastName:'Doe',
                company:'',
                email:'',
                password:'',
                submit:null 
             }}
             validationSchema={Yup.object().shape({
                firstName:Yup.string().max(255).required('First name is required'),
                lastName:Yup.string().max(255).required('First name is required'),
                company:Yup.string().max(255).required('First name is required'),
                email : Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                password : Yup.string().max(255).required('Password is required')
            })}
            onSubmit={async(values,{setSubmitting})=>{
                try{
                    setSubmitting(false);
                }catch (err) {
                    setSubmitting(false);
                }
            }}
        >
            {
                ({values,handleBlur,handleChange,errors,touched})=>(
                    <form>
                        <div>
                            <div className='form-grid'>
                                <label htmlFor="firstName" className='form-labels'>First Name *</label>
                                <FormInput
                                    type="text"
                                    id="firstName"
                                    value={values.firstName}
                                    name="firstName"
                                    placeholder="Enter firstname"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    error={Boolean(touched.firstName && errors.firstName)}
                                    />
                                    { touched.firstName && errors.firstName && (
                                        <div className='error-message'>{errors.firstName}</div>
                                    )}
                            </div>
                            <div className='form-grid'>
                                    <label htmlFor="lastName" className='form-labels'>Last Name *</label>
                                    <FormInput
                                    type="text"
                                    id="lastName"
                                    value={values.lastName}
                                    name="lastName"
                                    placeholder="Enter lastname"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    error={Boolean(touched.lastName && errors.lastName)}
                                    />
                                    { touched.lastName && errors.lastName && (
                                        <div className='error-message'>{errors.lastName}</div>
                                    )}
                            </div>
                            <div className='form-grid'>
                                    <label htmlFor="company" className='form-labels'>Company</label>
                                    <FormInput
                                    type="text"
                                    id="company"
                                    value={values.company}
                                    name="company"
                                    placeholder="Enter company name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    error={Boolean(touched.company && errors.company)}
                                    />
                                    { touched.company && errors.company && (
                                        <div className='error-message'>{errors.company}</div>
                                    )}
                            </div>
                            <div className='form-grid'>
                                <label htmlFor="email-login" className='form-labels'>Email Address</label>
                                <FormInput
                                    type="text"
                                    id="email-login"
                                    value={values.email}
                                    name="email"
                                    placeholder="Enter email address"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    error={Boolean(touched.email && errors.email)}
                                />
                                { touched.email && errors.email && (
                                    <div className='error-message'>{errors.email}</div>
                                )}
                            </div>
                            <div className='pb-3'>
                                <label htmlFor="password-login" className='form-labels'>Password</label>
                                <FormInput 
                                    type={showPassword ? 'text': 'password'} 
                                    id='password-login' 
                                    value={values.password}
                                    name='password'
                                    placeholder='Enter password'
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        changePassword(e.target.value);
                                    }}
                                    error = {Boolean(touched.password && errors.password)}
                                />
                                { touched.password && errors.password && (
                                    <div className='error-message'>{errors.password}</div>
                                )}
                            </div>
                            <div className='form-grid'>
                                <PasswordIndicator passwordStrength={level} />
                            </div>
                            <div className='form-grid'>
                                <div className='text-xs text-zinc-600 leading-6'>
                                    <span>
                                        By Signing up, you agree to our &nbsp;
                                        <Link to="#" className='text-blue-400 hover:underline'>
                                            Terms of Service
                                        </Link>
                                        &nbsp; and &nbsp;
                                        <Link to="#" className='text-blue-400 hover:underline'>
                                            Privacy Policy
                                        </Link>
                                    </span>                                    
                                </div>
                            </div>
                            {errors.submit && (
                                    <div className='error-message'>{errors.submit}</div>
                            )}
                            <div className='form-grid'>
                                <AnimateButton>
                                    <Button 
                                        type="button"
                                        bgColor="bg-blue"
                                    >
                                        Login 
                                    </Button>
                                </AnimateButton>
                            </div>
                            <div className='form-grid'>
                                <div className='divider'>
                                    <span>Sign up with</span>
                                </div>
                            </div>
                        
                            <FireBaseSocial/>
                        </div> 
                    </form>
                )
            }

        </Formik>
    </>
  )
}

export default AuthRegister