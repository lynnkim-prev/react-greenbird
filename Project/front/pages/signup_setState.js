import React, { useState } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { Form, Input, Checkbox, Button } from "antd";

const Signup = () => {
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log({
      id,
      nickname,
      password,
      passwordCheck,
      term,
      passwordError
    });
  };
  const onChangeId = e => {
    setId(e.target.value);
  };
  const onChangeNickname = e => {
    setNickname(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = e => {
    setPasswordError(e.target.value !== password); // 글자 칠 때마다 비밀번호 같은지 안같은지 확인해주는 것.
    setPasswordCheck(e.target.value);
  };
  const onChangeTerm = e => {
    setTermError(false);
    setTerm(e.target.checked);
  };



  return (
    <>
      <Head>
        <title>GreenBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">Id</label>
            <br />
            <Input name="user-id" required value={id} onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nickname">Nickname</label>
            <br />
            <Input
              name="user-nickname"
              required
              value={nickname}
              onChange={onChangeNickname}
            />
          </div>
          <div>
            <label htmlFor="user-password">Password</label>
            <br />
            <Input
              name="user-password"
              type="password"
              required
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">Check Password</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              required
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <div style={{ color: "red" }}>Please check your password</div>
            )}
          </div>
          <div>
            <Checkbox name="user-term" onChange={onChangeTerm} value={term}>
              I have read and agree to the privacy policy, terms of services and
              community guidelines.
            </Checkbox>
            {termError && (
              <div style={{ color: "red" }}>You must agree to the terms</div>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            {/* button type="submit"*/}
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
