const defaultState = {
  fetching: false,
  currentUser: {},
  loggedIn: false
}

export default function(state = defaultState, action) {
  let newState = { ...state }

  switch (action.type) {
    case "STOP_FETCHING":
      newState.fetching = false
      return newState

    case "START_FETCHING":
      newState.fetching = true
      return newState

    case "LOG_IN":
      newState.currentUser = action.currentUser
      newState.loggedIn = true
      return newState

    default:
      return state
  }
}
