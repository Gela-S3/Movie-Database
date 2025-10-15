import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>  
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
              <NavLink to="/"
              >
                <img src="\assets\mov_logo.png" alt="logo" className="logo-size" />

              </NavLink>
                
            </div>
        </div>
    </div>
    </>
  );
}   

export default Navbar;