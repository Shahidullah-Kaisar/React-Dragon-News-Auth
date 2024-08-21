import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userLogo from "../../assets/user.jpg";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => console.log("user SignOut"))
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
        <>
          <li className="text-2xl mr-7"><NavLink to="/">Home</NavLink></li>
          <li className="text-2xl mr-7"><NavLink to="/about">About</NavLink></li>
          <li className="text-2xl mr-7"><NavLink to="/career">Career</NavLink></li>
        </>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 mb-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mr-1"
          >
            <div className="w-12 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={userLogo} />
            </div>
          </div>

          {user ? (
            <button
              className="btn btn-secondary text-xl"
              onClick={handleSignOut}
            >
              SignOut
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-secondary text-xl">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
