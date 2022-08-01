import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Admin() {
  const state = useSelector((s => s));
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
}
export default Admin;
