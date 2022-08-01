import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    let condition = state.users.some((x) => x.email === data.email); //true
    if (condition) {
      toast('user already exists try with other credentials');
    } else {
      toast('signup successfull');
      navigate('/Login');
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="name" {...register('name', { required: true })} />
        {errors.name && <p className="err">name required</p>}

        <input placeholder="email" {...register('email', { required: true })} />
        {errors.email && <p className="err">email required</p>}

        <input placeholder="phone" {...register('phone', { required: true })} />
        {errors.phone && <p className="err">phone required</p>}

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
export default Signup;
