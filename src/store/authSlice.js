import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: false,
    data: {
      userId: null,
      userWriterId: null,
      accessToken: null,
    },
  },
  reducers: {
    userLogged(state, action) {
      state.isLogged = true; // todo - test this
      state.data.userId = action.payload?.userId;
      state.data.userWriterId = action.payload?.userWriterId;
      state.data.accessToken = action.payload?.accessToken;
    },
  },
});

export const { userLogged } = authSlice.actions;

export default authSlice.reducer;

  // const userData = {
  //   isLogged: false,
  //   data: {
  //     userId: 10,
  //     userWriterId: null,
  //     accessToken: "eYgdfsdkfgdfgkfghdl23489dfghs/sdfrfg443",
  //   },
  // };