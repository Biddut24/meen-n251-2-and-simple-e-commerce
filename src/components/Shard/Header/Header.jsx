import React from "react";
import logo from "../../../assets/Logo.svg";
import { Link, Links } from "react-router-dom";

const Header = () => {
  const munuItems = (
    <>
      <li>
        <Link to="/home" className="">
          Home
        </Link>
      </li>

      <li>
        <Link to="/shop" className="">
          Shop
        </Link>
      </li>

      <li>
        <Link to="/Order" className="">
          Order
        </Link>
      </li>
      <li>
        <Link to="/Order Review" className="">
          Order Review
        </Link>
      </li>
      <li>
        <Link to="/Manage Inventory" className="">
          Manage Inventory
        </Link>
      </li>
    </>
  );

  return (
    <nav>
      <div className="z-10 fixed left-0 right-0 navbar justify-between bg-black shadow-sm text-white lg:px-35 h-20">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text- white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {munuItems}
            </ul>
          </div>

          <Link to="/">
            <img src={logo} alt="ema-jho"/>
          </Link>
        </div>
        {/* ====== larger device ===== */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{munuItems}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
