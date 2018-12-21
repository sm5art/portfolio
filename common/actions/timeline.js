import { FETCHED_TIMELINE } from '../constants/ActionTypes';

export function timeline(data) {
  return { type: FETCHED_TIMELINE, data }
}

export function fetchTimeline() {
  return (dispatch) => {
    fetch('/static/output.json').then((response) => {
      response.json().then(function(data) {
        dispatch(timeline(data))
      });
    })
  }
}