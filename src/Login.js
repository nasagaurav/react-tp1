import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log('onsubmit', data);
    let condition = state.users.some(
      (x) => x.email === data.email && x.password === data.password
    ); //true/false
    let user = state.users.find(
      (x) => x.email === data.email && x.password === data.password
    ); //{id,name,email,password}
    if (condition) {
      toast('welcome user :' + user.name);
      dispatch({ type: 'user-login', payload: user });
    } else {
      toast('failed to login');
    }
  };

  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="email" {...register('email', { required: true })} />
        {errors.email && <p className="err">email required</p>}

        <input
          placeholder="password"
          {...register('password', { required: true })}
        />
        {errors.password && <p className="err">password required</p>}

        <input type="submit" />
      </form>
    </div>
  );
}
export default Login;
