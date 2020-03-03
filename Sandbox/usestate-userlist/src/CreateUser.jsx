import React from "react";

const CreateUser = ({username, email, onChange, onRegister}) => {
  return (
    <>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="username"
        name="email"
        value={email}
        onChange={onChange}
      />
      <button onClick={onRegister}>Register</button>
    </>
  );
};

export default CreateUser;
