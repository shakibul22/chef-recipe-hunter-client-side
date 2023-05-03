import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    return (

        <div className="navbar bg-cyan-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">FoodLee</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>  <Link to="/">Home</Link></li>
                    <li> <Link to="/blog">Blog</Link></li>
                 <li> <Link to="/login">Login</Link></li> 
                <li tabIndex={0}>
                    <a>
                        <img src="https://www.freepik.com/free-photo/mother-with-little-child-home_4382025.htm" alt="" />
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </a>
                    <ul className="p-1 bg-base-100">
                        <li><a>Submenu 1</a></li>
                        <li><button>Logout</button></li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;