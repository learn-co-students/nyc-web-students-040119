import * as adTypes from '../actionTypes/ad';

export function loadAdAsync(component) {
  return function(dispatch) {
    let randomAdId = Math.floor(Math.random() * 500);
    dispatch({ type: adTypes.START_FETCHING_AD, component })

    return fetch(`https://jsonplaceholder.typicode.com/photos/${randomAdId}`)
      .then(response => response.json())
      .then( ad => {
        dispatch({ type: adTypes.LOAD_AD, ad, component })
      })
  }
}
