import * as adTypes from '../actionTypes/ad';

const defaultState = {
  fetching: {
    // LoginPage: false,
    // SignupPage: true
  },
  items: {
    // LoginPage: adObject1,
    // SignupPage: adObject2
  }
}

export default function(state = defaultState, action) {
  const newState = { ...state }
  const newAds = {  ...state.items }
  const newFetching = { ...state.fetching }

  switch (action.type) {

    case adTypes.LOAD_AD:
      newAds[action.component] = action.ad
      newState.items = newAds

      newFetching[action.component] = false
      newState.fetching = newFetching

      return newState

    case adTypes.START_FETCHING_AD:
      newFetching[action.component] = true
      newState.fetching = newFetching
      return newState

    default:
      return state
  }
}
