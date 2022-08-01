import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
