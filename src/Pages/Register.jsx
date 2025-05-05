import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex  justify-center  md:mt-40'>
        
        <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
        <h1 className='text-2xl font-bold text-center '>Register in your account</h1>
      <div className="card-body">
        <fieldset className="fieldset">
            {/* name  */}
        <label className="label">Name</label>
        <input type="text" className="input" placeholder="enter name" />
         {/* photo url  */}
        <label className="label">Photo url</label>
          <input type="text" className="input" placeholder="photo url" />
            {/* email  */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* password  */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
          <div className='my-1 flex justify-center'><button>If you Have An Account ? <Link to='/auth/login' className='text-[#F75B5F] font-bold'>Login</Link></button></div>
        </fieldset>
      </div>
    </div>
    </div>
    );
};

export default Register;