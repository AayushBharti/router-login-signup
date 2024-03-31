import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex max-w-[1080px] mx-auto py-2 justify-between items-center">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </nav>

      <div className="flex gap-3">
        { !isLoggedIn &&
          <Link to="/login">
            <button>
                Login
            </button>
          </Link>
        }
        { !isLoggedIn &&
          <Link to="/signup">
            <button>
                Signup
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/">
            <button onClick={()=>{
                setIsLoggedIn(false);
                toast.success("Logged Out")
            }}>
                Logout
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/dashboard">
            <button>
                Dashboard
            </button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
