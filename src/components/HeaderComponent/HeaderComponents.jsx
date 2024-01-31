import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./styles.module.css";

const HeaderComponents = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);


  return (
    <nav>
      <ul className={classes.navbar}>
        <li>
          <Link state={{ from: location.pathname }} to="/">Main</Link>
        </li>
        <li>
          <Link state={{ from: location.pathname }} to="/posts">Posts</Link>
        </li>
        <li>
          <Link state={{ from: location.pathname }} to="/users">Users</Link>
        </li>
      </ul>

    </nav>
  );
};

export default HeaderComponents;
