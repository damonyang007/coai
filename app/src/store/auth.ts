import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {tokenField} from "../conf.ts";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    authenticated: false,
    username: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload as string;
      axios.defaults.headers.common["Authorization"] = state.token;
      localStorage.setItem(tokenField, state.token);
    },
    setAuthenticated: (state, action) => {
      state.authenticated = action.payload as boolean;
    },
    setUsername: (state, action) => {
      state.username = action.payload as string;
    },
    logout: (state) => {
      state.token = "";
      state.authenticated = false;
      state.username = "";
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem(tokenField);

      location.reload();
    },
  },
});

export function validateToken(dispatch: any, token: string, hook?: () => any) {
  token = token.trim();
  dispatch(setToken(token));

  if (token.length === 0) {
    dispatch(setAuthenticated(false));
    dispatch(setUsername(""));
    return;
  } else
    axios
      .post("/state")
      .then((res) => {
        dispatch(setAuthenticated(res.data.status));
        dispatch(setUsername(res.data.user));
        hook && hook();
      })
      .catch((err) => {
        // keep state
        console.debug(err);
      });
}

export const selectAuthenticated = (state: any) => state.auth.authenticated;
export const selectUsername = (state: any) => state.auth.username;

export const { setToken, setAuthenticated, setUsername, logout } =
  authSlice.actions;
export default authSlice.reducer;
