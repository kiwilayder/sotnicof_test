import React from "react";
import style from "./PostsList.module.css";
import { PostItem } from "../postItem/PostItem";

export function PostsList({ posts, users }) {
   if (Object.keys(users).length === 0) return null;

   return (
      <div className={style.posts}>
         {posts.map((post) => {
            return <PostItem key={post.id} post={post} user={users[post.userId]} />;
         })}
      </div>
   );
}
