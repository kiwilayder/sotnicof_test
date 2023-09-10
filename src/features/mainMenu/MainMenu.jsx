import { PicLeftOutlined } from "@ant-design/icons";
import style from "./MainMenu.module.css";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const POSTS = "POSTS";

const items = [
   {
      label: <NavLink to="/posts/all">Posts</NavLink>,
      key: POSTS,
      icon: <PicLeftOutlined />,
   },
];

export function MainMenu() {
   const [currentComponent, setCurrentComponent] = useState(POSTS);

   return (
      <Menu
         className={style.menu}
         onClick={(event) => setCurrentComponent(event.key)}
         defaultSelectedKeys={[currentComponent]}
         mode="horizontal"
         items={items}
      />
   );
}
