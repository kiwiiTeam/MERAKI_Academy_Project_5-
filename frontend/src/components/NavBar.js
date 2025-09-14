import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
const NavBar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
    };
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <span>
        <b>Navbar</b>
      </span>
      {isLoggedIn ? (
        <>
          <NavLink to="">Dashboard</NavLink>
          <NavLink to="/todo/:id">todo</NavLink>
          <NavLink
            to="/login"
            onClick={() => {
              dispatch(logout());
            }}
          >
            logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </div>
  );
};

export default NavBar;
