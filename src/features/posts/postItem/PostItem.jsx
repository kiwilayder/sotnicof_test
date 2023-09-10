import { Card } from "antd";
import React from "react";
import style from "./PostItem.module.css";

export function PostItem({ post, user }) {
   if (!user) return null;

   return (
      <div className={style.items}>
         <Card className={style.item} title={post.title} bordered={true}>
            <p className={style.userName}>{`${user.name} id: ${user.id}`}</p>
            <p className={style.bodyCard}>{post.body}</p>
         </Card>
      </div>
   );
}
