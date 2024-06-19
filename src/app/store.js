import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/slice/userDataSlice";

export const store = configureStore({
  reducer: {
    app : userDetail
  },
});