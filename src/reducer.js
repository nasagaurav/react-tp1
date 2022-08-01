import { users, bookings, flights } from './data';
const intialState = {
  users: users,
  bookings: bookings,
  flights: flights,
  role: '',
  loggedin: false,
  user: null,
};

function reducer(state = intialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
