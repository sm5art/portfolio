import { LOGIN, VERIFY, CHECKED_COOKIE } from '../constants/ActionTypes';
import { browserHistory } from 'react-router';

export function login(data) {
  return { type: LOGIN, data }
}

export function loginVerified(data) {
  return { type: VERIFY, data }
}

export function checkedCookie() {
  return { type: CHECKED_COOKIE } 
}

export function verifyLogin(at) {
  return (dispatch) => {
    fetch("https://" + window.location.hostname + '/api/signup', { method:"POST", "body": "fb_at="+at,
      credentials: 'include'}).then((response) => {
      response.json().then((data) => {
        dispatch(loginVerified(data));
      })
    })
  }
}

export function checkSession() {
  return (dispatch) => {
    fetch("https://" + window.location.hostname + '/api/check_session', { method: 'GET',
      credentials: 'include' }).then((response) => {
      dispatch(checkedCookie())
      if(response.status != 401) {
        dispatch(login({'info':'cookie verified'}))
        dispatch(loginVerified({'info':'cookie verified'}))
      }
      else {
        console.log(window.location.pathname)
        setTimeout(()=>{
          const path = window.location.pathname.slice()
          browserHistory.push('/')
          browserHistory.push(path)}, 100);
      }
    })
  }
}
  