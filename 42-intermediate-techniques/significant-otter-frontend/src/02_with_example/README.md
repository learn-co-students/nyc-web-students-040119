# `with` higher-order components

## `with...` Concept

When people mention higher-order components, they're usually talking about this concept. This is the more powerful one since what it allows us to do is to reduce data and duplication across components.

## Steps

### 1: An empty HOC

To start, we're going to comment out what's being rendered inside of App. Then we'll create a new file (`withProps.js`) in a new folder (`hocs`). Inside of our new file, we're going to export a function that returns a React component class. For the moment, our React component should just render an `h1` element and log its props.

### 2: Our HOC takes in an argument

One of the key points to the `with...` pattern is that the higher-order component (the function) should either accept a component definition as an argument or return a component definition. We'll make two changes here to accomplish that:

1. Give our `withProps` function a parameter called `WrappedComponent` and log it to the console.
2. Import our `withProps` function into our `App` component and call it like this `export default withProps(App);`

We should see "hola!" rendered to the screen and `class App ...` logged in the console.

### 3: Our HOC renders the wrapped component

Now that we can see that we can render directly from the class that we're returning from `withProps`, let's render the `WrappedComponent`.

1. In our `App` component, uncomment the components we were previously rendering there
2. In our `withProps` higher-order component, instead of rendering `<h1>"hola!"</h1>`, render the wrapped component
3. Remove the log for the wrapped component in `withProps`

### 4: We implement the `props` part of `withProps`

Everything above so far has been setup for _any_ `with...` pattern higher-order component. In order to understand the flexibility of these components, we're going to pass the current time as a prop as well as a random color every five seconds. These are the `props` that the `App` will render _`with`_.

<!-- Don't forget that we're trying to wrap a component with some logic/state/data whatever functionality we want. This means that we're going to need to get the component that we're going to wrap! This is where function arguments come in handy. Let's create a new component and add it to the DOM so we can see it.

```js
// withConcept/AppWithoutWrapper.js
import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div>Hi from App!</div>
    );
  }

}

export default App;
```

Head over to the `index.js` file and uncomment the appropriate line to see this in action.

The next step is to import our wrapper function and to call it with our App as an argument.

```js
// withConcept/AppWithWrapper.js
import React, { Component } from 'react';
import withConcept from './functionAndClassTogether4EverExported';

class App extends Component {

  render() {
    return (
      <div>Hi from App!</div>
    );
  }

}

export default withConcept(App);
```

You should see that the `AppWithoutWrapper` just renders "Hi from App!" while the `AppWithWrapper` renders "hola". This is because the `withConcept` function (and all higher-order functions of this type) are creating NEW components that have their OWN render functions! -->
