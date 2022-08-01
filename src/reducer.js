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
    case 'add-flight':
      return { ...state, flights: [...state.flights, action.payload] };
    default:
      return state;
  }
}

export default reducer;
