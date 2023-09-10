import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/posts/postSlice";
import filterSlice from "./features/filterPanel/filterSlice";

export const store = configureStore({
   reducer: {
      posts: postSlice,
      filter: filterSlice,
   },
});
