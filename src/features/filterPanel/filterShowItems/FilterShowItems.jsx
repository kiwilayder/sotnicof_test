import React from "react";
import style from "./FilterShowItems.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? style.selectItem : style.item);

export function FilterShowItems() {
   return (
      <div className={style.wrapper}>
         Show:
         <NavLink to={"/all"} className={setActive}>
            All
         </NavLink>
         <NavLink to={"/10"} className={setActive}>
            10
         </NavLink>
         <NavLink to={"/20"} className={setActive}>
            20
         </NavLink>
         <NavLink to={"/50"} className={setActive}>
            50
         </NavLink>
      </div>
   );
}
