import { AutoComplete, Button } from "antd";
import { useState } from "react";
import style from "./FilterTitle.module.css";
import { filterOfTitle } from "../FilterPanel";

export function FilterTitle({ setFilter, items }) {
   const [options, setOptions] = useState([]);
   const [valueInput, setValueInput] = useState("");

   const searchResult = (query) => {
      const postsName = items.filter((post) => post.title.indexOf(query.toLowerCase()) !== -1);
      if (postsName.length === 0) return { label: <span>No results</span> };
      return {
         value: query,
         label: <span>{`${postsName.length} results for ${query}`}</span>,
      };
   };

   function clearFilter() {
      setFilter(null);
      setValueInput("");
   }

   function onSelect(value) {
      setFilter(filterOfTitle, value);
      setValueInput("");
   }

   return (
      <div className={style.wrapper}>
         Title:
         <AutoComplete
            popupMatchSelectWidth={252}
            style={{
               width: "100%",
            }}
            value={valueInput}
            onChange={setValueInput}
            options={options}
            onSelect={onSelect}
            onSearch={(value) => setOptions(value ? [searchResult(value)] : [])}
         ></AutoComplete>
         <Button onClick={clearFilter}>Clear</Button>
      </div>
   );
}
