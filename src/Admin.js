import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
function Admin() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('prev-flihts', state.flights);
    console.log('onSubmit', data);
    dispatch({ type: 'add-flight', payload: data });
  };

  return (
    <div>
      <h1>Admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="id"
          value={state.flights.length + 1}
          {...register('id')}
        />
        <input
          placeholder="source"
          {...register('source', { required: true })}
        />

        {errors.source && <p className="err">source required</p>}
        <input
          placeholder="destination"
          {...register('destination', { required: true })}
        />
        {errors.destination && <p className="err">destination required</p>}

        <input placeholder="time" {...register('time', { required: true })} />
        {errors.time && <p className="err">time required</p>}

        <input placeholder="stops" {...register('stops', { required: true })} />
        {errors.stops && <p className="err">stops required</p>}

        <input type="submit" />
      </form>

      <h2>All flights {state.flights.length}</h2>
      <ul>
        {state.flights.map((item) => (
          <li>
            {item.id} {item.source}-{item.destnation} {item.time} {item.stops}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Admin;
