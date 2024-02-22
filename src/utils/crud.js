import { createSlice } from "@reduxjs/toolkit";

const crud = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addU: (state, action) => {
      return action.payload;
    },
    removeU: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = crud.actions;

export default crud.reducer;
