import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  name: string;
  email: string;
  avatar_url?: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Anonymous User",
    email: "user@anonymous.com",
  },
  reducers: {},
});

export default userSlice.reducer;
