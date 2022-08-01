import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Signup() {
  const state = useSelector((s => s));
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Signup</h1>
    </div>
  );
}
export default Signup;
