import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: false,
    data: {
      userId: null,
      userWriterId: null,
      accessToken: null,
      role: null,
    },
  },
  reducers: {
    userLogged(state, action) {
      state.isLogged = true;
      state.data.userId = action.payload?.userId; // todo - not set yet
      state.data.userWriterId = action.payload?.userWriterId;
      state.data.accessToken = action.payload.accessToken;
      state.data.role = 1000; // todo
    },
    userLoggedOut(state, action) {
      state.isLogged = false;
      state.data.userId = null;
      state.data.userWriterId = null;
      state.data.accessToken = null;
      state.data.role = null;
    },
    accessTokenRefreshed(state, action) { // todo maybe make this equal to userLogged
      state.isLogged = true;
      state.data.accessToken = action.payload.accessToken;
      state.data.role = 1000; // todo
    },
  },
});

export const { userLogged, userLoggedOut, accessTokenRefreshed } = authSlice.actions;

export default authSlice.reducer;

  // const userData = {
  //   isLogged: false,
  //   data: {
  //     userId: 10,
  //     userWriterId: null,
  //     accessToken: "eYgdfsdkfgdfgkfghdl23489dfghs/sdfrfg443",
  //   },
  // };