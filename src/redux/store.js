import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import pollsReducer from "./pollsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    polls: pollsReducer,
  },
});

export default store;
