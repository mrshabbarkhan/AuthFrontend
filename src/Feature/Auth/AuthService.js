import axios from "axios";

//register
const API = "/api/user";
const RegisterUserService = async (formdata) => {
  const response = await axios.post(API + "/register", formdata);
  localStorage.setItem("user", JSON.stringify(response.data));
  console.log(response);
  return response.data;
};

//login
const loginuserservice = async (formdata) => {
  const response = await axios.post(API + "/login", formdata);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const service = {
  RegisterUserService,
  loginuserservice,
};

export default service;
