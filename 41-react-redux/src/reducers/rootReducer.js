const defaultState = { count: 23 }
const INCREMENT_COUNT = "INCREMENT_COUNT"
const DECREMENT_COUNT = "DECREMENT_COUNT"

export default function (state = defaultState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + action.count
      }
      break;
    case DECREMENT_COUNT:

      return {
        ...state,
        count: state.count - action.count
      }
      break;
    default:
      return state
  }
}
