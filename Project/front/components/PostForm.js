import { Button, Form, Input } from 'antd';
import React from 'react';

const PostForm = () => {
  const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [
      {
        User: {
          id: 1,
          nickname: 'Green'
        },
        content: '1st tweet',
        img: 'https://cpschools.com/wellness/wp-content/uploads/sites/52/2018/07/BUTTON_Twitter.jpg'
      }
    ]
  };
  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data">
      <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
      <div>
        {/*여러개 동시에 올릴 수 있고, 숨겨져 있음*/}
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          쫵쫵
        </Button>
      </div>
      <div>
        {dummy.imagePaths.map((v, i) => {
          return (
            <div key={v} style={{ display: 'inline-block' }}>
              <img src={'http://localhost:3065/' + v} style={{ width: '200px' }} alt="v" />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};
export default PostForm;
