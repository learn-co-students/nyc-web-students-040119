# Building `withAd`

Every website needs randomly generated advertisements!

## Steps

### 1: Create a blank `withAd` higher-order component

Use `withProps` as an example for how to manage this. We will import and wrap this higher-order component in our `SignupPage` and our `LoginPage` components.

### 2: Set up state in `withAd` and pass down as props

### 3: Update state in `withAd`

### 4: Aside on loading indicators


<!--
Let's go back to our ad example. Let's say that we want different components to display ads. Maybe an article, maybe a sidebar, maybe a footer. We won't be picky, we just want to tell our application how to get the ad information, not how to render it.

We'll create a new higher-order component called `withAd` and a new `App` component which is wrapped `withAd`.

```js
// withAdConcept/withAdBeginning.js
import React, { Component } from 'react';

export default function(WrappedComponent) {
  return class extends Component {
    render() {
      console.log('withAdBeginning props', this.props)
      console.log('withAdBeginning state', this.state)

      return <WrappedComponent />
    }
  }
}
```

```js
// withAdConcept/App.js
import React, { Component } from 'react';
import withAd from './withAdBeginning';

class App extends Component {

  render() {
    console.log('app props', this.props)
    console.log('app state', this.state)
    return (
      <div>Hi from App!</div>
    );
  }

}

export default withAd(App);
```

Right now, the higher-order component is working with the wrapped component and simply rendering the wrapped component exactly as it is. If we open this in the browser, we see neither the `withAd` component and the `App` component have any props or state! This is good to start with.

We know how to fetch ads already, so we're going to create some state in the component inside of `withAd`, make the fetch every few seconds, and pass that information as props to the `App` component.

```js
// src/withAdConcept/withAdSoFetch.js
import React, { Component } from 'react';

export default function(WrappedComponent) {
  return class extends Component {
    state = {
      ad: {}
    }

    componentDidMount() {
      let counter = 1;

      // set up the timer
      this.adTimerId = setInterval(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${++counter}`)
          .then(response => response.json())
          .then(json => {
            this.setState({
              ad: json
            })
          })
      }, 5000)
    }

    componentWillUnmount() {

      // stop the timer
      clearInterval(this.adTimerId)
    }

    render() {
      console.log('withAdBeginning props', this.props)
      console.log('withAdBeginning state', this.state)

      return <WrappedComponent ad={this.state.ad} {...this.props} />
    }
  }
}
```

The ONLY thing we changed about the `withAd` component is that we added initial state, added a fetch every five seconds, and passed that state down to the wrapped component as props. I'll also update my `App` component slightly to use the new version of `withAd`.

```js
// withAdConcept/App.js

import React, { Component } from 'react';
// import withAd from './withAdBeginning';
import withAd from './withAdSoFetch';

class App extends Component {

  render() {
    console.log('app props', this.props)
    console.log('app state', this.state)
    return (
      <div>Hi from App!</div>
    );
  }

}

export default withAd(App);
```

In the browser console, we should see the App component rerendering based on the new props it's receiving from the `withAd` higher-order component every five seconds. This is a useful HOC! Now my `App` component (or ANY component) can be wrapped with that functionality in order to receive new ads every five seconds.

The only small piece that's missing is that when we create higher-order components, we may be COMPOSING multiple higher-order components together (think something like `withRouter(withAd(connect(mstp, mdtp)(MyComponent)))`). In order to get around this we want to make sure to pass all other received props down to the wrapped component. This has already been done in the example above with the `{...this.props}` bit of code. -->
