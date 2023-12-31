import {
  MenuFoldOutlined,
  PicRightOutlined,
  UserOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import logo from "../assets/logo.png";
import ContentReport from "../contentReport";
import Clock from "../clock";

const { Header, Sider, Content } = Layout;
const ReportDies = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "User",
            },
            {
              key: "2",
              icon: <PicRightOutlined />,
              label: "Detail Dies",
            },
            {
              key: "3",
              icon: <VerticalAlignBottomOutlined />,
              label: "Report",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                marginLeft: "16px", // Adjust the margin as per your requirement
              }}
            />
            <img
              src={logo}
              alt=""
              style={{
                width: 150, // Adjust the width as per your requirement
                height: 40, // Adjust the height as per your requirement
              }}
            />
          </div>
          <div style={{ paddingRight: "30px" }}>
            <Clock />
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ContentReport />
        </Content>
      </Layout>
    </Layout>
  );
};
export default ReportDies;
