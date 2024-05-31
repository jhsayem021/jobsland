import React from 'react';
import logo from '../../assets/image/jobsland-logo.png'
import './NavberSection.css'
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const NavbarSection = () => {
  return (
    <div className='lg:w-[1324px] mx-auto lg:py-4 bg-white'>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
              <li> <Link to="">Home</Link> </li>
              <li> <Link to="">Jobs</Link> </li>
              <li> <Link to="">Candidates</Link> </li>
              <li> <Link to="">Pages</Link> </li>
              <li> <Link to="">Blogs</Link> </li>
            </ul>
          </div>
          <span className=" text-xl"><img className='lg:w-64 w-24' src={logo} alt="" /></span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex  px-1 lg:gap-x-10 menu-custom">
            <li> <Link to="">Home</Link> </li>
            <li> <Link to="">Jobs</Link> </li>
            <li> <Link to="">Candidates</Link> </li>
            <li> <Link to="">Pages</Link> </li>
            <li> <Link to="">Blogs</Link> </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label htmlFor="my_modal_7" className=''><IoSearch className='lg:text-[25px]  lg:me-5 ' /></label>
          <button className="btn bg-green-500 hover:bg-white text-white hover:text-black hover:border-2 hover:border-green-500 lg:btn-lg lg:ms-0 ms-3">
            Post Job
          </button>
        </div>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal " role="dialog">
          <div className="form-control ">
            <input type="text" placeholder="Search" className="input input-bordered w-72 md:w-96 " />
          </div>
          <label className="modal-backdrop " htmlFor="my_modal_7">Close</label>
        </div>
      </div>

    </div>
  );
};

export default NavbarSection;