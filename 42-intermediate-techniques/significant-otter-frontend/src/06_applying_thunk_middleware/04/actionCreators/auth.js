import * as authTypes from '../actionTypes/auth';

// export function startFetching() {
//   return { type: authTypes.START_FETCHING_AUTH }
// }

// export function stopFetching() {
//   return { type: authTypes.STOP_FETCHING_AUTH }
// }

export function logIn(currentUser) {
  return { type: authTypes.LOG_IN, currentUser }
}

const fetchOptions = {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      }

function checkResponseStatus(response) {
  if (response.status === 401) {
    throw new Error("Unauthorized")
  }

  return response
}

function catchLoginErrors(e) {
  if (e.message === "Unauthorized") {
    // you could add this message to state if you want
  }
}

export function logInAsync() {

  return function(dispatch) {

    dispatch({ type: authTypes.START_FETCHING_AUTH })

    return fetch("http://localhost:3000/api/v1/profile", fetchOptions)
      .then(response => {
        dispatch({ type: authTypes.STOP_FETCHING_AUTH })
        return response
      })
      .then(checkResponseStatus)
      .then(resp => resp.json())
      .then(data => dispatch({
        type: authTypes.LOG_IN,
        currentUser: data.otter
      }))
      .catch(catchLoginErrors)
  }
}
