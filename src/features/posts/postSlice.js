import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
   name: "posts",
   initialState: {
      posts: [],
      users: {},
   },
   reducers: {
      addPosts(state, action) {
         state.posts = action.payload.posts;
      },
      addUsers(state, action) {
         const usersObj = action.payload.users.reduce((obj, value) => {
            obj[value.id] = value;
            return obj;
         }, {});

         state.users = usersObj;
      },
   },
});

export const { addPosts, addUsers } = postsSlice.actions;
export default postsSlice.reducer;
