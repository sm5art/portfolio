import { REVERSE_DRAWER_STATE } from '../constants/ActionTypes';

const initialState = {
  toggled: false,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
  case REVERSE_DRAWER_STATE:
    return Object.assign({}, state, { toggled: !state.toggled })
  default:
    return Object.assign({}, state);
  }
}
