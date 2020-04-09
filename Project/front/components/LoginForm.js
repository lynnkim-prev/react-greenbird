import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { useInput } from '../pages/signup';

const LoginForm = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      console.log(id, password);
    },
    [id, password]
  );

  return (
    <Form onSubmit={onSubmitForm} style={{ padding: '10px' }}>
      <div>
        <label htmlFor="user-id">Id</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>

      <div>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} required />
      </div>

      <div>
        {/* loading props true로 하면 로딩중 화면 뱅글뱅글*/}
        <Button type="primary" htmlType="submit" loading={false}>
          Login
        </Button>
        <Link href="/signup">
          <a>
            <Button>Sign up</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
