import React from "react";
import User from "./User";

const ListUser = ({ onRemove, onToggle, users }) => {
  return users.map(user => (
    <User onRemove={onRemove} onToggle={onToggle} user={user} />
  ));
};

export default ListUser;
