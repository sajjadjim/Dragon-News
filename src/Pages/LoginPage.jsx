import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AUthProvider';

const LoginPage = () => {

  const {signIn} = use(AuthContext)
const handleLogIn= (e) =>{
  e.preventDefault()
const form = e.target;
const email = form.email.value 
const password = form.password.value
console.log({email , password}) 
signIn(email,password).then(()=>{
  alert("Successfully Sing in")
}).catch((error)=>{
  console.log(error)
})
}

    return (

    <div className='flex  justify-center  md:mt-40'>
        
        <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
        <h1 className='text-2xl font-bold text-center my-5'>Login in your account</h1>
      <form onSubmit={handleLogIn} className="card-body">
        <fieldset className="fieldset">
          {/* email  */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          {/* password  */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <button type='submit'  className="btn btn-neutral mt-4"><NavLink to='/'>Login</NavLink></button>
          <div className='my-1 flex justify-center'><button>Dont’t Have An Account ? <Link to='/auth/register' className='text-[#F75B5F] font-bold'>Register</Link></button></div>
        </fieldset>
      </form>
    </div>
    </div>

    );
};

export default LoginPage;