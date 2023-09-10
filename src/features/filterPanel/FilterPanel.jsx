import React, { useMemo } from "react";
import style from "./FilterPanel.module.css";
import { FilterUserName } from "./filterUserName/FilterUserName";
import { FilterTitle } from "./filterTitle/FilterTitle";
import { FilterInOrder } from "./filterInOrder/FilterInOrder";
import { FilterShowItems } from "./filterShowItems/FilterShowItems";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "./filterSlice";

export const filterOfUserName = "FILTER_NAME";
export const filterOfTitle = "FILTER_TITLE";
export const filterOfOrder = "FILTER_ORDER";

export function FilterPanel({ users, elements, render }) {
   const dispatch = useDispatch();
   const currentFilter = useSelector((state) => state.filter);

   const currentFilterElements = useMemo(() => {
      switch (currentFilter.filter) {
         case filterOfUserName: {
            return elements.filter((item) => currentFilter.value.some((id) => id === item.userId));
         }
         case filterOfTitle: {
            return elements.filter((el) => el.title.indexOf(currentFilter.value.toLowerCase()) !== -1);
         }
         case filterOfOrder: {
            if (currentFilter.value === "Ascending") return elements.toSorted((a, b) => a.userId - b.userId);
            if (currentFilter.value === "Descending") return elements.toSorted((a, b) => b.userId - a.userId);
         }
      }
   }, [currentFilter]);

   function setFilter(filterName, value) {
      dispatch(changeFilter({ filterName, value }));
   }

   return (
      <div className={style.wrapper}>
         <div className={style.filterPanel}>
            <FilterShowItems />
            <FilterUserName users={users} setFilter={setFilter} />
            <FilterTitle setFilter={setFilter} items={elements} />
            <FilterInOrder setFilter={setFilter} />
         </div>
         <div>{render(currentFilterElements ? currentFilterElements : elements)}</div>
      </div>
   );
}
