import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/login'>Login</Link></li>

                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl lg:ml-32">My Portfolio</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><Link to='#contact'>Contact</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>

                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
            <div class="navbar-end">
                <button className="gap-2 text-black btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 delay-500 duration-300 mr-10">  <FontAwesomeIcon icon={faDownload} />
                    Resume</button>
            </div>

        </div>
    );
};

export default Navbar;