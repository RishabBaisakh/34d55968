import React from "react";
import { Link, useLocation } from "react-router-dom";
import ViewListIcon from "@mui/icons-material/ViewList";
import ArchiveIcon from "@mui/icons-material/Archive";

const BottomTabBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="bottomTabBar">
      <div className="navLinks">
        <Link className={pathname === "/" ? "active" : ""} to="/">
          <ViewListIcon />
        </Link>
        <Link
          className={pathname === "/archived" ? "active" : ""}
          to="/archived"
        >
          <ArchiveIcon />
        </Link>
      </div>
    </div>
  );
};

export default BottomTabBar;
