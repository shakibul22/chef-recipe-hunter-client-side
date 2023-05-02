import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {user,loginUser}=useContext(AuthContext);
    
    const handleLogin=event=>{
        event.preventDefault();
         const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        loginUser(email,password)

       
    }
    return (
        <form onSubmit={handleLogin} className="w-full md:w-[570px] mt-15 mb-10 p-10  bg-white rounded-lg text-black">
            <h3 className='text-2xl font-bold mb-5'>Login</h3>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                <label className="label">
                    <a href='#' className="underline text-error">Forgot password?</a>
                </label>
            </div>
            <div className="form-control">
                <label className="flex gap-4 cursor-pointer mt-4">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Remember me</span>
                </label>
            </div>
            <div className="form-control mt-6 mb-3">
               <button className="btn btn-warning">Login</button>
            </div>
            {/* {error && <p className='text-center text-error mb-2'>{error}</p>} */}
            <p className='text-center'>Don't have an account? <Link to='/register' className='text-warning underline'>Create an account</Link></p>
        </form>
    );
};

export default Login;