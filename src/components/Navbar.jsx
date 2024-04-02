import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <nav className="flex gap-x-6 text-richblack-100">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </nav>

      <div className="flex gap-3">
        {!isLoggedIn && (
          <Link to="/login">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
            rounded-[8px] border border-richblack-700"
            >
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
            rounded-[8px] border border-richblack-700"
            >
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
            rounded-[8px] border border-richblack-700"
            >
              onClick=
              {() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
              > Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
            rounded-[8px] border border-richblack-700"
            >
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
