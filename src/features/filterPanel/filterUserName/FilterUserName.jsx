import { Cascader } from "antd";
import style from "./FilterUserName.module.css";
import { useEffect, useState } from "react";
import { filterOfUserName } from "../FilterPanel";

export function FilterUserName({ users, setFilter }) {
   const [usersSort, setUsersSort] = useState([]);

   useEffect(() => {
      const options = [];
      for (let obj of Object.values(users)) {
         options.push({ label: obj.name, value: obj.id });
      }
      setUsersSort(options);
   }, [users]);

   const onChange = (values) => {
      setFilter(values.length === 0 ? null : filterOfUserName, values.flat());
   };

   return (
      <div className={style.wrapper}>
         User:
         <Cascader
            style={{
               width: "100%",
            }}
            options={usersSort}
            onChange={onChange}
            multiple
         />
      </div>
   );
}
