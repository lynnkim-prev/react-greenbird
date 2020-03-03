import React from "react";

const User = ({ onRemove, onToggle, user }) => {
  return (
    <div>
        {user.id}
      <b style={{ color: user.isActive ? "green" : "red" }} onClick={()=>onToggle(user.id)} >
        {user.username}
      </b>
      {user.email} <button onClick={()=>onRemove(user.id)}>Remove</button>
    </div>
  );
};

export default User;
