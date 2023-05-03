import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import "./Login.css";


const Login = () => {
    const { user, loginUser, googleUser ,githubUser} = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from;
    console.log(location, from)

    const handleGoogle=()=>{
       googleUser()
       .then(result=>{
        const googleUsed=result.user;
        console.log(googleUsed);
       })
       .catch(error => {
        console.log(error)
    })
    }
    const handleGithub=()=>{
       githubUser()
       .then(result=>{
        const githubUsed=result.user;
        console.log(githubUsed);
       })
       .catch(error => {
        console.log(error)
    })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError(null)

        loginUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                form.reset();
                toast.success('Successfully Login!')

                setTimeout(() => {
                    if (from) {
                        navigate(from)
                    }
                    else {
                        navigate('/')
                    }
                }, 2000)
            })
            .catch(error => {
                setError(error.message)
                console.log(error)
            })

    }
    return (
        <form onSubmit={handleLogin} className="w-full md:w-[570px] mt-15 mb-10 p-10  bg-white rounded-lg text-black">
            <h3 className='text-2xl font-bold mb-5'>Login</h3>
            <div className="form-control">
                <label  className="label">
                    <span className="label-text">Email</span>
                </label>
               <Toaster></Toaster>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
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
            {error && <p className='text-center text-error mb-2'>{error}</p>}
            <p className='text-center'>Don't have an account? <Link to='/register' className='text-warning underline'>Create an account</Link></p>
            <p>_____________or_______________</p>
            <div className=" social-button-container w-50 mt-3">
                <div onClick={handleGoogle} className="">
                    <img 

                        className=" social-button"
                        src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                        alt=""
                    />
                </div>
                <div onClick={handleGithub} className="">
                    <img
                        className=" social-button"
                        src="https://i.ibb.co/g9f4P0S/github-btn.png"
                        alt=""
                    />
                </div>
            </div>
        </form>
    );
};

export default Login;