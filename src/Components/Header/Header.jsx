import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { Input } from 'postcss';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="navbar bg-cyan-100 shadow-lg p-3">
            <div className="flex-1">
                <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-20">
                        <span className="text-3xl">F</span>
                    </div>
                </div>
                <div className="avatar online placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <span className="text-xl">OO</span>
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                        <span>DLEE</span>
                    </div>
                </div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>  <Link to="/">Home</Link></li>
                    <li> <Link to="/blog">Blog</Link></li>
                    {user ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>{user.displayName}</a></li>
                                <li><a onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </div> : <li> <Link to="/login">Login</Link></li>}
                </ul>

            </div>
        </div>

    );
};

export default Header;

