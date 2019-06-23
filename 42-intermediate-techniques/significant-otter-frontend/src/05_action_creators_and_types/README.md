# `runMapDispatchToProps` Starter Code

We'll add Redux to our application now instead of vanilla React. To do this, we're going to create a reducer, a store, wrap our component in a `Provider` and `connect` our higher-order component to the store!

If you haven't already looked into Redux or aren't comfortable with it yet, it's worth checking out [these videos by Dan Abramov](https://egghead.io/series/getting-started-with-redux), the father of Redux.

## Steps

### 1: Create `authReducer`, `rootReducer`, store, and wrap App in `Provider`

### 2: `connect` our `withAuth` HOC to the store

* Remove component initial state
* Replace all local component state to use props from mapStateToProps
* Replace all calls to setState with a function from runMapDispatchToProps

### 3: Add action types

* We get: autocomplete for action types, and errors to catch typos
* Create file for the action types, and export constants
* In reducers, import action types and replace action type strings
* In connected components, replace action types strings

### 4: Add action creators!

* These are functions that return actions
* Create file for action creators and export each with name
* Each action creator should return whatever you would pass to `dispatch()`
* Import action creators in HOC
* Remove your mapDispatchToProps function and replace with action creators
