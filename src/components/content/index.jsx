import React from "react";
import { Table, Button, Modal, Space } from "antd";
import { PlusSquareOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import FormUpdateDies from "../modalForm";
import FormAdd from "../modalFormAdd";

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

export default function Contentdies() {
  const [open, setOpen] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [confirmAddLoading, setConfirmAddLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [addModalText, setAddModalText] = useState("");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleAddCancel = () => {
    console.log("Clicked cancel button");
    setOpenAddModal(false);
  };

  const handleAddOk = () => {
    setAddModalText("The modal will be closed after two seconds");
    setConfirmAddLoading(true);
    setTimeout(() => {
      setOpenAddModal(false);
      setConfirmAddLoading(false);
    }, 2000);
  };
  const showModalAdd = () => {
    setOpenAddModal(true);
  };

  return (
    <div>
      <div className="position-relative">
        <div
          className="position-absolute top-0 start-0 translate-middle fs-4"
          style={{ paddingLeft: "150px" }}
        >
          READINESS DIES
        </div>
        <div
          className="position-absolute top-0 start-100 translate-middle"
          style={{ paddingRight: "220px", paddingTop: "20px" }}
        >
          <Space>
            <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
              UPDATE
            </Button>
            <Button
              type="primary"
              icon={<PlusSquareOutlined />}
              onClick={showModalAdd}
            >
              ADD DIES
            </Button>
          </Space>

          <Modal
            title="UPDATE DATA DIES"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            width={1000}
          >
            <p>{modalText}</p>
            {open && <FormUpdateDies />}
          </Modal>
          <Modal
            title="ADD DATA DIES"
            open={openAddModal}
            onOk={handleAddOk}
            confirmLoading={confirmAddLoading}
            onCancel={handleAddCancel}
            width={1000}
          >
            <p>{addModalText}</p>
            {openAddModal && <FormAdd />}
          </Modal>
        </div>
      </div>
      <br />
      <br />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
