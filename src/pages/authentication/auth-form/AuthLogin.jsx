import React,{useState} from 'react';

import { Link } from 'react-router-dom';

import './AuthInput.css';

// Component
import {FormInput,FormCheck} from '../../../components/form';
import Button from '../../../components/animation/Button';
import FireBaseSocial from './FireBaseSocial';
import AnimateButton from '../../../components/animation/AnimateButton';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

const AuthLogin = () => {
    const [checked,setChecked] = useState(false);
    const [showPassword,setShowPassword] = useState(false);

  return (
    <>
        <Formik 
        initialValues={{
            email : 'devakayti@gmail.com',
            password : '12345',
            submit : null
        }}
        validationSchema={Yup.object().shape({
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
        >{
            ({values,handleBlur,handleChange,errors,touched})=>(
                <form>
                    <div>
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
                        <div className='form-grid'>
                            <label htmlFor="password-login" className='form-labels'>Password</label>
                            <FormInput 
                                type={showPassword ? 'text': 'password'} 
                                id='password-login' 
                                value={values.password}
                                name='password'
                                placeholder='Enter password'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error = {Boolean(touched.password && errors.password)}
                            />
                            { touched.password && errors.password && (
                                <div className='error-message'>{errors.password}</div>
                            )}
                        </div>
                        <div className='form-grid'>
                            <div className='flex justify-between items-center'>
                                <FormCheck
                                    type="checkbox"
                                    id="keepsignIn"
                                    checked={checked}
                                    name="chceked"
                                    onChange={(event)=> setChecked(event.target.checked)}
                                    label="Keep me sign in"
                                />
                               
                                <Link className='text-sm hover:underline bg-blue tracking-wide'>Forgot Password?</Link>
                            </div>
                            {
                                errors.submit && (
                                    <div className='error-message'>{errors.submit}</div>
                                )
                            }
                        </div>
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
                                <span>Login with</span>
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

export default AuthLogin