import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <div className="HolyGrail-nav" id="nav">
      <h2>Snack-A-Log!</h2>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <br></br>
      <Link className="nav-link" to="/snacks">
        Snack List
      </Link>
      <br></br>
      <Link className="nav-link" to="/snacks/new">
        New Snack
      </Link>
      <br></br>
    </div>
  );
};

export default Nav;
