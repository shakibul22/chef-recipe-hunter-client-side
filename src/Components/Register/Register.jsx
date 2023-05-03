import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import "./Register.css"
const Register = () => {
    const { user, registerUser,googleUser,githubUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleGoogle=()=>{
        googleUser()
        .then(result=>{
         const googleUsed=result.user;
         console.log(googleUsed);
        })
        .catch(error => {
         console.log(error)
     })
     };
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

    const handleRegister = event => {
        event.preventDefault();
       

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.{6,})\S+$/.test(password)) {
            setError("password not valid need 6 char ");
            return;
        }
        
            registerUser(email, password)
                .then((result) => {
                    console.log(result.user);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        
    }
    return (
        
        <form onSubmit={handleRegister}  className="w-full md:w-[570px] mt-15 mb-10 p-10  bg-white rounded-lg text-black">
            <h3 className='text-2xl font-bold mb-5'>Create an account</h3>
            <div className="form-control">

                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input  onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder="Name" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input  onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input  onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="password" className="input input-bordered" required />

            </div>
           
            <div className="form-control">
                <label className="flex gap-4 cursor-pointer mt-4">
                    <input type="checkbox" className="checkbox" required />
                    <span className="label-text">Accept terms & conditions</span>
                </label>
            </div>
            <div className="form-control mt-6 mb-3">
                <button  className="btn btn-warning"><Link to='/login'>Create an account</Link></button>
            </div>
            {error && <p className='text-center text-error mb-2'>{error}</p>}
            <p className='text-center'>Already have an account? <Link to='/login' className='text-warning underline'>Login</Link></p>
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

export default Register;