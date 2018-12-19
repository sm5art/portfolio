import { LOGIN, VERIFY, CHECKED_COOKIE } from '../constants/ActionTypes';

const initialState = {
  loaded: false,
  verify: false,
  data: null,
  verify_data: null,
  cookie_checked: false
};

export default function todos(state = initialState, action) {
  switch (action.type) {
  case LOGIN:
    return Object.assign({}, state, { loaded: true, data: action.data })
  case VERIFY:
    return Object.assign({}, state, { verify: true, verify_data: action.data})
  case CHECKED_COOKIE:
    return Object.assign({}, state, { cookie_checked: true })
  default:
    return Object.assign({}, state);
  }
}
