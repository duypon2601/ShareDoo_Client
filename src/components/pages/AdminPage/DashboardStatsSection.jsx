import {
    AppstoreOutlined,
    BarChartOutlined,
    DashboardOutlined,
    FileTextOutlined,
    LogoutOutlined,
    SettingOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Layout, Menu } from "antd";
  import React from "react";
  
  const { Sider } = Layout;
  
  const DashboardStatsSection = () => {
    return (
      <Sider width={256} className="site-layout-background">
        <div
          className="logo"
          style={{ padding: "16px", fontSize: "20px", fontWeight: "bold" }}
        >
          UX Pilot Admin
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
            Products
          </Menu.Item>
          <Menu.Item key="4" icon={<FileTextOutlined />}>
            Orders
          </Menu.Item>
          <Menu.Item key="5" icon={<BarChartOutlined />}>
            Reports
          </Menu.Item>
          <Menu.Item key="6" icon={<AppstoreOutlined />}>
            Categories
          </Menu.Item>
          <Menu.Item key="7" icon={<SettingOutlined />}>
            System Logs
          </Menu.Item>
          <Menu.Item key="8" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="9" icon={<LogoutOutlined />} style={{ color: "red" }}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
    );
};

export default DashboardStatsSection;  