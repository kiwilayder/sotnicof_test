import React, { useEffect } from "react";
import { getPosts, getUsers } from "../actions/posts";
import { useDispatch, useSelector } from "react-redux";
import { PostsList } from "../features/posts/PostsList/PostsList";
import { useParams } from "react-router-dom";
import { FilterPanel } from "../features/filterPanel/FilterPanel";

export function Posts() {
   const { amountPosts } = useParams();

   const users = useSelector((state) => state.posts.users);
   const posts = useSelector((state) => state.posts.posts);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getPosts(amountPosts));
      dispatch(getUsers());
   }, [amountPosts]);

   return (
      <>
         <FilterPanel
            users={users}
            elements={posts}
            render={(items) => {
               return <PostsList posts={items} users={users} />;
            }}
         />
      </>
   );
}
