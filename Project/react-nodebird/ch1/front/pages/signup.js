import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head"
import { Input, Form, Checkbox, Button } from "antd";

/* 모든 인풋에 state, eventListener 달아준 것 */
/* value와 onChange={onChange}는 반드시 짝으로 갈 것. */

const Signup = () => {

  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if(password !== passwordCheck) {
      return setPasswordError(true)
    }
    if(!term) {
      return setTermError(true)
    }
    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term
    });
    
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangeNick = (e) => {
    setNick(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordError(e.target.value !== password);/* 비밀번호 체크할 때마다 같은지 안같은지 확인해줌 */
    setPasswordCheck(e.target.value);
  };

  const onChangeTerm = (e) => {
    setTermError(false); /* 텀 에러 기본상태 꺼주기 */
    setTerm(e.target.checked);
  };

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css" />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br/>
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input name="user-nick" value={nick} required onChange={onChangeNick} />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 체크</label>
            <br />
            <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
            {passwordError && <div style={{ color:'red' }}>비밀번호가 일치하지 않습니다</div>}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>말을 잘 들을 것을 맹세합니다</Checkbox>
            {termError && <div style={{ color:'red' }}>약관에 동의하셔야 합니다</div>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;