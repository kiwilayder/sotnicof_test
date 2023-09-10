import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { filterOfOrder } from "../FilterPanel";

const items = [
   {
      key: "Ascending",
      label: <p>Ascending</p>,
   },
   {
      key: "Descending",
      label: <p>Descending</p>,
   },
];

export function FilterInOrder({ setFilter }) {
   function changeSort({ key }) {
      setFilter(filterOfOrder, key);
   }

   return (
      <Dropdown
         menu={{
            items,
            onClick: changeSort,
         }}
      >
         <a onClick={(e) => e.preventDefault()}>
            <Space>
               Sort by:
               <DownOutlined />
            </Space>
         </a>
      </Dropdown>
   );
}
