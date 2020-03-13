import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form, Input, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';



// custom hook - useState + handler로 업그레이드
export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);


  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
    },
    [password, passwordCheck, term] // 함수 내부에서 쓰는 state를 deps 배열로 넣기.
  );

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordError(e.target.value !== password); // 글자 칠 때마다 비밀번호 같은지 안같은지 확인해주는 것.
      setPasswordCheck(e.target.value);
    },
    [password]
  );
  const onChangeTerm = useCallback(e => {
    setTermError(false); // 텀 에러 꺼주기
    setTerm(e.target.checked); // 꺼주고 체크상태 set하기
  }, []);

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>

        <div>
          <label htmlFor="user-id">Id</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-nickname">Nickname</label>
          <br />
          <Input name="user-nickname" value={nickname} onChange={onChangeNickname} required />
        </div>
        <div>
          <label htmlFor="user-password">Password</label>
          <br />
          <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
        </div>
        <div>
          <label htmlFor="user-password-check">Check Password</label>
          <br />
          <Input name="user-password-check" type="password" value={passwordCheck} onChange={onChangePasswordCheck} required />
          {passwordError && <div style={{ color: 'red' }}>Please check your password</div>}
        </div>
        <div>
          <Checkbox name="user-term" onChange={onChangeTerm} value={term}>
            I have read and agree to the privacy policy, terms of services and community guidelines.
          </Checkbox>
          {termError && <div style={{ color: 'red' }}>You must agree to the terms</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          {/* button type="submit"*/}
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;
