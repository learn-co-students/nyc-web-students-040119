# Applying `thunk` middleware

What is `thunk` useful for? We have action creators that return plain objects. What if we wanted to move the asynchronous parts of our apps into the action creators? Right now, it would be impossible because although dispatch is called with the result of the action creators, we don't have access to it directly in that file.

`thunk` gives us the ability to return functions from our action creators! These functions will be called with `dispatch` as the only argument. We'll work through it slowly, first with the `withAd` example, and then with our `withAuth` examples.

## Steps

### 1: Set up our `withAd` HOC to use Redux

* Action types
* Reducer
* Action creators
* connect
* DEBUG. I ran into so many bugs here.

### 2: Import `thunk` and `applyMiddleware`

### 3: Use thunk

We're going to move the fetch logic from the component to the action creator. We shouldn't need to touch the reducer or the action type.

### 4: Implement thunk for `withAuth`
