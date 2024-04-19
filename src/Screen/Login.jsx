import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../Feature/Auth/AuthSlice";
import "../components/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, user, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formdata;

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if (isSuccess && user) {
      toast.dark("Login Successfully");
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [user, isSuccess, isError, message]);
  const handledata = (e) => {
    e.preventDefault();
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handlelogin = (e) => {
    e.preventDefault();
    if (isError) {
      // toast.error("invalid Details");
    } else {
      dispatch(loginUser(formdata));
    }
    setformdata({
      email: "",
      password: "",
    });

    console.log(isError);
  };

  if (isLoading) {
    return (
      <>
        <div className="body">
        <span class="loader"></span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="body">
        <div class="login-form">
          {/* <div className="display-6 text-center">Login here</div> */}
          <div class="text">LOGIN</div>
          <form onSubmit={handlelogin}>
            <div class="field">
              <div class="fas fa-envelope"></div>
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                name="email"
                value={email}
                onChange={handledata}
              />
            </div>
            <div class="field">
              <div class="fas fa-lock"></div>
              <input
                type="password"
                placeholder="Enter your Password"
                required
                name="password"
                value={password}
                onChange={handledata}
              />
            </div>

            <button>LOGIN</button>
            <div class="link">
              Not a member?
              <Link to={"/register"}>Signup Now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
