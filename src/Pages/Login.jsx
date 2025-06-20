import React from 'react'
import { useState } from 'react'
import loginBanner from '../assets/loginBg.png'
import loginlogo from '../assets/movhub-01.svg'
import { login, signup } from '../firebase'


function Login() {

  const [showSignIn, setShowSignIn] = useState('Sign In');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user_auth = async (e)=>{
    e.preventDefault()
    if(showSignIn === 'Sign In'){
      await login (email, password)
    }else{
      await signup(name, email, password)
      await login(email, password)
    }
  }


  return (
    <div className='overflow-hidden h-screen'>
      <div className='relative h-full'>
        <img src={loginBanner} alt="" className='w-full h-full object-cover'/>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10"></div>
        
        <img src={loginlogo} alt="" className='absolute z-20 top-5 left-10 w-60'/>    

        <div className='absolute inset-0 flex justify-center items-center z-30'> 
          <form className='absolute z-30 w-full max-w-[350px] p-10 m-auto top-[50%vh] left-[50%hh] text-white bg-[rgba(0,0,0,0.75)] rounded-md'>
            <h1 className='text-2xl text-white text-center mb-5 font-semibold'>{showSignIn}</h1>
            {showSignIn === 'Sign Up' ? 
            <input type="text" placeholder='your name'  className='w-full mb-8 p-3 bg-[rgba(255,255,255,0.65)] rounded outline-none text-black text-sm'
            value={name} onChange={(e)=>{setName(e.target.value)}}/> : <></>}

            <input type="email" placeholder='your email'  className='w-full mb-8 p-3 bg-[rgba(255,255,255,0.65)] rounded outline-none text-black text-sm'
            value={email} onChange={(e)=>{setEmail(e.target.value)}}/> 

            <input type="password" placeholder='your password' className='w-full mb-8 p-3 bg-[rgba(255,255,255,0.65)] rounded outline-none text-black text-sm'
            value={password} onChange={(e)=>{setPassword(e.target.value)}}/> 

            <button className='w-full bg-[#d00] py-2 rounded-md'
            onClick={user_auth} type='submit'
            >{showSignIn}</button>

            <div className='flex items-center justify-between text-[12px] mt-2 mb-3'>
              <div className='flex items-center gap-1'>
                <input type="checkbox" />
                <label htmlFor=''>Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>

            <div className=' text-white flex flex-col items-center justify-center text-[12px] cursor-pointer'>
              {showSignIn === 'Sign In' ?<p>New to Movhub? <span onClick={()=>setShowSignIn('Sign Up')} className='underline'>Sign up Now</span></p> : <p>Already have account? <span onClick={()=>setShowSignIn('Sign In')} className='underline'>Sign In Now</span></p>}
            </div>
          </form>
          
        </div>

      </div>

      
    </div>
  )
}

export default Login