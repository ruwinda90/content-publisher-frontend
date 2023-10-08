import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: false,
    data: {
      userId: null,
      userWriterId: null,
      accessToken: null,
      role: 1000,
    },
  },
  reducers: {
    userLogged(state, action) {
      state.isLogged = true;
      state.data.userId = action.payload?.userId;
      state.data.userWriterId = action.payload?.userWriterId;
      state.data.accessToken = action.payload.accessToken;
    },
    accessTokenRefreshed(state, action) {
      state.data.accessToken = action.payload.accessToken;
    }
  },
});

export const { userLogged, accessTokenRefreshed } = authSlice.actions;

export default authSlice.reducer;

  // const userData = {
  //   isLogged: false,
  //   data: {
  //     userId: 10,
  //     userWriterId: null,
  //     accessToken: "eYgdfsdkfgdfgkfghdl23489dfghs/sdfrfg443",
  //   },
  // };