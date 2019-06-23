import * as authTypes from '../actionTypes/auth';

const defaultState = {
  fetching: false,
  currentUser: {},
  loggedIn: false
}

export default function(state = defaultState, action) {
  let newState = { ...state }

  switch (action.type) {
    case authTypes.STOP_FETCHING:
      newState.fetching = false
      return newState

    case authTypes.START_FETCHING:
      newState.fetching = true
      return newState

    case authTypes.LOG_IN:
      newState.currentUser = action.currentUser
      newState.loggedIn = true
      return newState

    default:
      return state
  }
}
