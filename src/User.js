import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function User() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>User</h1>
    </div>
  );
}
export default User;
