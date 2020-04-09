import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Button, Row, Col, Card, Avatar, Form, Checkbox } from 'antd';
import Link from 'next/link';
import LoginForm from './LoginForm';

const dummy = {
  nickname: 'LynnKim',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false
};

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>GreenBird</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>

      <Row gutter={8}>
        {dummy.isLoggedIn ? (
          // 모바일 화면에서 24grid전체 차지, 작은 화면에서 6 12 6만큼 차지
          <Col xs={24} md={6}>
            {/*User Cards on left side*/}
            <Card
              actions={[
                <div key="tweet">
                  Tweets
                  <br />
                  {dummy.Post.length}
                </div>,
                <div key="following">
                  Followings
                  <br />
                  {dummy.Followings.length}
                </div>,
                <div key="follower">
                  Followers
                  <br />
                  {dummy.Followers.length}
                </div>
              ]}
            >
              {/*user data*/}
              <Card.Meta
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>} // L
                title={dummy.nickname} // LynnKim
              />
            </Card>
          </Col>
        ) : (
          <Col xs={24} md={6}>
            {/*Login form & Sign up button*/}
            <LoginForm />
          </Col>
        )}

        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  childern: PropTypes.elementType
};

export default AppLayout;
