import React from "react";
import { Menu, Input } from "antd";

/* children은 prop임 이름고정 */
const AppLayout = ({ children }) => {
  return (
      <div>
        <Menu mode={"horizontal"}>
          <Menu.Item key="home">노드버드</Menu.Item>
          <Menu.Item key="profile">프로필</Menu.Item>
          <Menu.Item key="mail">
            <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
          </Menu.Item>
        </Menu>
        { children }
      </div>
  );
};

export default AppLayout;