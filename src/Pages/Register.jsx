import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AUthProvider';

const Register = () => {

// firebase Auth using here by Call 
const {createUser , setUser} = use(AuthContext);
  // Here the submit form work policy doing Here 
  const handleSubmitForm = (e) =>{
    e.preventDefault();
    // const from = e.target
    const name =e.target.name.value
    const photoUrl =e.target.photoUrl.value
    const email =e.target.email.value
    const password =e.target.password.value
    console.log({name, email, photoUrl , password})
    createUser(email,password).then((result)=>{
      const user = result.user
      // console.log(user)
      setUser(user)
    }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage,errorCode)
    })
  }
    return (
        <div className='flex  justify-center  md:mt-10'>
        
        <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
        <h1 className='text-2xl font-bold text-center '>Register in your account</h1>
      <form onSubmit={handleSubmitForm} className="card-body">
        <fieldset className="fieldset">
            {/* name  */}
        <label className="label">Name</label>
        <input name='name' type="text" className="input" placeholder="enter name" />
         {/* photo url  */}
        <label className="label">Photo url</label>
          <input name='photoUrl' type="text" className="input" placeholder="photo url" />
            {/* email  */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          {/* password  */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <div className='my-1 flex justify-center'><button>If you Have An Account ? <Link to='/auth/login' className='text-[#F75B5F] font-bold'>Login</Link></button></div>
        </fieldset>
      </form>
    </div>
    </div>
    );
};

export default Register;