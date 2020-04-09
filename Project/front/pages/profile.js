import React from 'react';
import { Button, List, Icon, Card, Form, Input } from 'antd';
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  return (
    <div>
      <NicknameEditForm />
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>팔로 목록</div>}
        loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
        bordered
        dataSource={['그린버드', '옐로버드', '어쩌구버드']}
        renderItem={item => (
          <List.Item style={{ marginTop: '20px' }}>
              <Card actions={[<Icon key="stop" type="stop" />]} ><Card.Meta description={item}/></Card>
          </List.Item>
        )}
      />
        <List
            style={{ marginBottom: '20px' }}
            grid={{ gutter: 4, xs: 2, md: 3 }}
            size="small"
            header={<div>팔로워 목록</div>}
            loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
            bordered
            dataSource={['그린버드', '옐로버드', '어쩌구버드']}
            renderItem={item => (
                <List.Item style={{ marginTop: '20px' }}>
                    {/*배열 안에 jsx를 쓸 때는 반드시 key를 넣어줘야 함. 배열이 반복문을 의미하기 때문*/}
                    <Card actions={[<Icon key="stop" type="stop" />]} ><Card.Meta description={item}/></Card>
                </List.Item>
            )}
        />
    </div>
  );
};

export default Profile;
