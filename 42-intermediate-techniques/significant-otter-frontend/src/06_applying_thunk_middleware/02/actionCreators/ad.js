import * as adTypes from '../actionTypes/ad';

export function loadAd(ad, component) {
  return { type: adTypes.LOAD_AD, ad, component }
}

export function startFetching(component) {
  return { type: adTypes.START_FETCHING_AD, component }
}
