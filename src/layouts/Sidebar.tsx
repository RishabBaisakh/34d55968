import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="sidebar">
      <img className="logo" src={logo} />
      <div className="navLinks">
        <Link className={pathname === "/" ? "active" : ""} to="/">
          Activity Feed
        </Link>
        <Link
          className={pathname === "/archived" ? "active" : ""}
          to="/archived"
        >
          Archived Activity
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
