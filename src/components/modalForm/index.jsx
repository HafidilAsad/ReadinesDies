import React from "react";
import { Table, Typography, Button, Modal, Space, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items = [
  { key: "1", label: "OK Dies" },
  { key: "2", label: "Repair Dies" },
  { key: "3", label: "New Dies" },
];

const columns = [
  {
    title: "Dies Name",
    dataIndex: "name",
    filters: [
      {
        text: "Dies",
        value: "Dies",
      },
      {
        text: "Dies",
        value: "Dies",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Number Dies",
    dataIndex: "number",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.number - b.number,
  },
  {
    title: "Status Dies",
    dataIndex: "status",
    filters: [
      {
        text: "OK ",
        value: "OK ",
      },
      {
        text: "New Dies",
        value: "New Dies",
      },
      {
        text: "Repair Dies",
        value: "Repair Dies",
      },
    ],
    onFilter: (value, record) => record.status.indexOf(value) === 0,
  },
];

const data = [
  {
    key: "1",
    name: "Dies Brown",
    number: 31,
    status: "New Dies ",
  },
  {
    key: "2",
    name: "Dies Green",
    number: 32,
    status: "OK Dies  ",
  },
  {
    key: "3",
    name: "Dies Black",
    number: 33,
    status: "Repair Dies ",
  },
  {
    key: "4",
    name: "Dies Red",
    number: 34,
    status: "OK  Dies",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

export default function FormUpdateDies() {
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
}
