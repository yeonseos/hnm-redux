import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

const authenticateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      logInSuccess(state, action) {
          state.id = action.payload.id;
          state.password = action.payload.password;
          state.authenticate = true;
      },
      logOutSuccess(state) {
          state.id = '';
          state.password = '';
          state.authenticate = false;
      },
  }
});

export const { logInSuccess, logOutSuccess } = authenticateSlice.actions;
export default authenticateSlice.reducer;
