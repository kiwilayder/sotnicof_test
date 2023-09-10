import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPosts, addUsers } from "../features/posts/postSlice";
import { postsAPI } from "../api/API";

export const getPosts = createAsyncThunk("posts/getPosts", async (sumPosts, { dispatch }) => {
   const posts = await postsAPI.getPosts(sumPosts);
   dispatch(addPosts({ posts }));
});

export const getUsers = createAsyncThunk("posts/getUsers", async (_, { dispatch }) => {
   const users = await postsAPI.getUsers();
   dispatch(addUsers({ users }));
});
