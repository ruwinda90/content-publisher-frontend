import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notify: {
        id: -1,
        message: "",
        type: null,
    },
  },
  reducers: {
    notificationSent(state, action) {
      state.notify.id = state.notify.id + 1; // todo - check this
      state.notify.message = action.payload.message;
      state.notify.type = action.payload.type;
    },
  },
});

export const { notificationSent } = notificationSlice.actions;
export default notificationSlice.reducer;
