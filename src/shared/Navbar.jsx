import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut().then().catch();
  };

  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/events">Events</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  const defaultImg = 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg';
  return (
    <div className="navbar  container py-5">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link className=" bg-[#0F1B33] p-3">
          {" "}
          <img src={logo} alt="" />{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex">
            {" "}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Link to='/dashboard'>
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL || defaultImg}
                  />
                </Link>
              </div>
            </div>
            <Link className="btn" onClick={handleSignOut}>
              Logout
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login" className="btn">
              login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
