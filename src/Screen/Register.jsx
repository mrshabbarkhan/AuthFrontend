import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterUser } from "../Feature/Auth/AuthSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formdata;
  const { isLoading, user, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === password2) {
      dispatch(RegisterUser(formdata));
    } else {
      toast.error("password does not match");
    }
    setformdata({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
  };
  useEffect(() => {
    if (user && isSuccess) {
      toast.dark("Login Successfully");
      navigate("/");
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [user, isError, message]);
  if (isLoading) {
    return (
      <>
        <div className="body">
          <h1 className="padding">Loading.....</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="body">
        <div className="login-form">
          <div class="text">REGISTER</div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <div class="fas fa-user"></div>
              <input
                type="text"
                placeholder="Enter Name Here"
                required
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <div class="fas fa-envelope"></div>
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <div class="fas fa-key"></div>
              <input
                type="new-password"
                placeholder="Enter Your password"
                required
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <div class="fas fa-lock"></div>
              <input
                type="new-password"
                placeholder="Confirm your password"
                required
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </div>

            <button>Register</button>
            <div class="link">
              Already a member?
              <Link to={"/login"}> SignIn Now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
