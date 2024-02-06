import React from 'react'
import Input from '../components/Input';
const Login = () => {
  return (
    <>
      <div className='box-border w-screen h-screen flex flex-row'>
       <div className='hidden lg:block h-screen w-3/6'>
        <img src="https://cdn.pixabay.com/photo/2023/12/09/23/34/login-8440426_640.png" alt="loginImage"  className='h-full w-fit '/>
       </div>
       <form className='flex flex-col gap-2 justify-evenly content-center mx-auto px-20 py-10 lg:w-3/6'>
          <div className='flex flex-row w-min gap-5'>

            <div>
            <Input label="name" type="text" width="12"/>
            </div>
            <div>
            <Input label="username" type="text" />
            </div>
          </div>
          <div className=''>
          <Input label="email" type="email"  width="full"/>
          </div>
          <div className=''>
          <Input label="password" type="password"  width="full" placeholder="6+ character"/>
          </div>
          <div className=' px-4'>
             <button type="submit" className='w-full bg-blue-950 text-center font-medium text-xl h-12 rounded-3xl text-white'>Create Account</button>
          </div>
       </form>
      </div>
    </>
  )
}

export default Login;
