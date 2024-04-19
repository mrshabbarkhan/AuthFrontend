import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LogoutUser } from "../Feature/Auth/AuthSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    if (isSuccess) {
      toast.dark("Logout Successfully");
    }
    dispatch(LogoutUser());
    navigate("/register");
  };
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <Link to={"/"} className="text">
           {user ? user.name : "unknown"}
        </Link>
        <span>
          {!user ? (
            <>
              {/* <Link to={"/Register"} className="btn btn-success mx-1">
                Register
              </Link>
              <Link to={"/login"} className="btn btn-info mx-1">
                login
              </Link> */}
            </>
          ) : (
            <Link className="btn btn-danger mx-1" onClick={logout}>
            <i class="fa-solid fa-right-from-bracket"></i>
            </Link>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
