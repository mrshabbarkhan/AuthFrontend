import axios from "axios";

//register
// const API = "https://authentication-2-qgze.onrender.com/api/user";
const RegisterUserService = async (formdata) => {
  const response = await axios.post(
    "https://authentication-2-qgze.onrender.com/api/user/register",
    formdata
  );
  localStorage.setItem("user", JSON.stringify(response.data));
  console.log(response);
  return response.data;
};

//login
const loginuserservice = async (formdata) => {
  const response = await axios.post(
    "https://authentication-2-qgze.onrender.com/api/user/login",
    formdata
  );
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const service = {
  RegisterUserService,
  loginuserservice,
};

export default service;
