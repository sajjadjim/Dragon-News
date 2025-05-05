import React from 'react';
import { Link } from 'react-router';

const LoginPage = () => {
    return (

    <div className='flex  justify-center  md:mt-40'>
        
        <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
        <h1 className='text-2xl font-bold text-center my-5'>Login in your account</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Login</button>
          <div className='my-1 flex justify-center'><button>Dont’t Have An Account ? <Link to='/auth/register' className='text-[#F75B5F] font-bold'>Register</Link></button></div>
        </fieldset>
      </div>
    </div>
    </div>

    );
};

export default LoginPage;