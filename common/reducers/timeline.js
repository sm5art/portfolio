import { FETCHED_TIMELINE } from '../constants/ActionTypes';

const initialState = {
  loaded: false,
  data: []
};

export default function todos(state = initialState, action) {
  switch (action.type) {
  case FETCHED_TIMELINE:
    return Object.assign({}, state, { loaded: true, data: action.data })
  default:
    return Object.assign({}, state);
  }
}
