import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const {user,registerUser}=useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleRegister=event=>{
        event.preventDefault();
   
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("password not valid need 8 char ");
      return;
    }
    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    }
    return (
        <form className="w-full md:w-[570px] mt-15 mb-10 p-10  bg-white rounded-lg text-black">
            <h3 className='text-2xl font-bold mb-5'>Create an account</h3>
            <div className="form-control">
              <p className="text-danger">{error}</p>

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
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input  onChange={(e) => setPassword(e.target.value)} type="password" name='confirm' placeholder="password" className="input input-bordered" required />

            </div>
            <div className="form-control">
                <label className="flex gap-4 cursor-pointer mt-4">
                    <input type="checkbox" className="checkbox" required />
                    <span className="label-text">Accept terms & conditions</span>
                </label>
            </div>
            <div className="form-control mt-6 mb-3">
                <button  onSubmit={handleRegister} className="btn btn-warning">Create an account</button>
            </div>
            {/* {error && <p className='text-center text-error mb-2'>{error}</p>} */}
            <p className='text-center'>Already have an account? <Link to='/login' className='text-warning underline'>Login</Link></p>
        </form>
    );
};

export default Register;