import * as authTypes from '../actionTypes/auth';

export function startFetching() {
  return { type: authTypes.START_FETCHING }
}

export function stopFetching() {
  return { type: authTypes.STOP_FETCHING }
}

export function logIn(currentUser) {
  return { type: authTypes.LOG_IN, currentUser }
}
