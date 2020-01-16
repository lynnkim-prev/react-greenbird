import React from "react";
import Link from "next/link";
import { Menu, Input } from "antd";

/* children은 prop임 이름고정 */
const AppLayout = ({ children }) => {
  return (
      <div>
        <Menu mode={"horizontal"}>
        <Menu.Item key="home"><Link href="/"><a>Nodebird</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>profile</a></Link></Menu.Item>
          <Menu.Item key="mail">
            <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
          </Menu.Item>
        </Menu>
      <Link href="/signup"><a><button>회원가입</button></a></Link>
        { children }
      </div>
  );
};

export default AppLayout;