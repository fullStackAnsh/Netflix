import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true)
  const toggleSignInForm = () =>{
     setIsSignInForm(!isSignInForm);
  }

  return (
    <>
    <Header />
    <div className='absolute w-full h-screen z-10 bg-gradient-to-b from-black to-transparent'></div>
    <div>
    <img className='object-center object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
    </div>
    <form className="p-12 bg-black absolute z-40  grid top-[15%] left-[40%] rounded-2xl bg-opacity-65  " action="">
      <h1 className='text-white m-4 text-3xl font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {
        !isSignInForm && (
          <input type="text" placeholder='Full Name' className='p-4 m-4 rounded-md bg-gray-500 bg-opacity-65' />
        )
      }
      <input type="text" placeholder='Email Address' className='p-4 m-4 rounded-md bg-gray-500 bg-opacity-65' />
      
      <input type="password" placeholder='Password' className='p-4 m-4 rounded-md bg-gray-500 bg-opacity-65' />
      <button className='p-4 m-4 bg-red-600 text-white rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
      <p className='text-white m-4 cursor-pointer'onClick={toggleSignInForm}>{isSignInForm ? "New to netflix? Sign Up Now" : "Returning User? Sign IN"}</p>
    </form>
    </>
  )
}

export default Login