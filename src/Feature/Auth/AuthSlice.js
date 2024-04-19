import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import service from "./AuthService";
import { toast } from "react-toastify";

const userExixt = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: userExixt ? userExixt : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isError = false;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        // state.isError = false;
        // state.isSuccess = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isError = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(LogoutUser.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.user = null;
        state.message = "";
      });
  },
});
export default AuthSlice.reducer;

//register
export const RegisterUser = createAsyncThunk(
  "Register/user",
  async (formdata, thunkApi) => {
    try {
      return await service.RegisterUserService(formdata);
    } catch (error) {
      const message = error.response.data.message;
      return thunkApi.rejectWithValue(message)
    }
  }
);

//logout
export const LogoutUser = createAsyncThunk("LOGOUT/USER", async () => {
  localStorage.removeItem("user");
});

//login
export const loginUser = createAsyncThunk("Login/user", async (formdata,thunkApi) => {
try {
  return await service.loginuserservice(formdata);
} catch (error) {
  const message = error.response.data.message
  return thunkApi.rejectWithValue(message)
}
});
