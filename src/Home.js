import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Home() {
  const navigate = useNavigate();
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const a = state.flights;
  const handleClick = (item) => {
    toast('you must be loggedin to book a flight');
    navigate('/Login');
  };
  return (
    <div>
      <h1>Home</h1>
      <div className="flex">
        {a.map((item, index) => (
          <div className="item">
            <h3>
              {item.source}- {item.destination}
            </h3>
            <h4>time: {item.time}</h4>
            <h5>total stop: {item.stops}</h5>
            <button onClick={() => handleClick(item)}>book now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
