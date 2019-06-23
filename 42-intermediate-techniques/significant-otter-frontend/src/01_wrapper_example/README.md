# Wrapper components

Wrapper components are external components that we wrap around some child components. Examples of these components are `BrowserRouter`, `Provider`, Semantic UI's `Form`, etc. When I've created these components myself, I've usually used these types of HOC's for things like pages and layouts.

_This pattern is ideal for DRYing up components which share similar structures._ Consider this component hierarchy:

* App
  * LoginPage
    * header
      * nav
    * form
      * input[type="text"]
      * input[type="password"]
      * input[type="submit"]
  * SignupPage
    * header
      * nav
    * form
      * input[type="text"]
      * input[type="password"]
      * input[type="submit"]
  * ProfilePage
    * header
      * nav
    * main

There are two main examples of duplication here:
1. Each `...Page` component has a header with a nav inside; and
2. The `SignupPage` and `LoginPage` both have very similar form structures

## Steps

In this walkthrough, we're going to conceptually break out the pieces that are repetitive in the application, then take a look at that component in the code.

### 1. `...Page` components

Looking back at our component hierarchy, let's highlight where duplication occurs between each of the `...Page` components:

* App
  * LoginPage
    * **header**
      * **nav**
    * form
      * input[type="text"]
      * input[type="password"]
      * input[type="submit"]
  * SignupPage
    * **header**
      * **nav**
    * form
      * input[type="text"]
      * input[type="password"]
      * input[type="submit"]
  * ProfilePage
    * **header**
      * **nav**
    * main

To get over this duplication and keep code DRY, some developers might use the pattern of creating wrapper components. In this case, it means creating something like a `Page` component that will render the header and nav, as well as whatever else should be on the page.

* App
  * LoginPage
    * **Page**
      * form
        * input[type="text"]
        * input[type="password"]
        * input[type="submit"]
  * SignupPage
    * **Page**
      * form
        * input[type="text"]
        * input[type="password"]
        * input[type="submit"]
  * ProfilePage
    * **Page**
      * main

At first, this probably looks like a lot more work. In practice, though, this is very simple to accomplish and minimizes duplication greatly. This is because while we have added another component to our list of components, our `...Page` components now only have to worry about rendering the things on those pages that are not shared.

Take a look at the [`Page`](./Page.js) and [`ProfilePage`](./ProfilePage.js) components for an example. Visually in the browser, there is no change. But in readability of the code, there is a big difference. We know now that all of those repeated components can be abstracted away. The important bits inside of each page are still rendered thanks to `props.children`.

> **Note:** To see this change reflected in the app, import the `App` component from the `01` folder.

### 2. `UserForm` components

The other repetition that we saw in our component code was the user form in both the `LoginPage` and `SignupPage` components. This is also something that we can factor out, but will take another step to fully make this new `UserForm` component flexible enough to work in both places.

The first part of this step is to create a `UserForm` component with all the same elements as the form shared by `LoginPage` and `SignupPage`. Once we've done that, we can import that component into both of those page components and replace their `form`s for `UserForm`s! Our component hierarchy should look like this now:

* App
  * LoginPage
    * Page
      * **UserForm**
  * SignupPage
    * Page
      * **UserForm**
  * ProfilePage
    * Page
      * main

Already, there's an issue, though. There's nothing to differentiate these forms. We do know that eventually one will need to make a different fetch request than the other. But even on the view layer, they both would say "Sign up!" or "Log in!" if we don't account for it. In order to accomplish this, we'll have our wrapper components take in props! For now, we can just send a prop down called `submitValue` so that we can customize the text that shows up in the submit button.

> **Note:** To see this change reflected in the app, import the `App` component from the `02` folder.

## Which abstraction was a higher-order component?

The `Page` component we made in Step 1 is a little closer to the abstractions that we'll make with higher-order component functions. And since we're rendering other components from the `Page` component's `props.children`, it's as if we had passed the other components in like arguments.

The `UserForm` component we made in Step 2 is probably a more familiar abstraction. It is also still very flexible since you can pass props to that component (even though we aren't expecting children). We can use these props like our `submitValue` to customize how the component renders or even how it behaves.

## What's the difference?

The potential for dynamic child components is what sets these two approaches apart. The `Page` component in Step 1 is more static in how it renders itself, but doesn't care who its children are or how its children are rendered. The `UserForm` component will almost always have the same children components and is static in that sense.

## What are the limitations?

Using the wrapper pattern here, we are only able to define how the children of a component fits within it's branch in the tree. The big missing piece is that `Page` isn't able to share any of its data with any of it's children from props.

[In order to abstract shared data-based logic, we'll need to use the more common `with...` pattern.](../02_with_example/README.md)

<!-- A simple example looks like below. We'll create a wrapper component to display a new ad every 5 seconds in the body of an article:

```js
// wrappedConcept/ArticleWithAd.js
import React, { Component } from 'react';

class ArticleWithAd extends Component {
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

  // Notice the `this.props.children`!
  render() {
    const hasAnAdBeenLoaded = !!Object.keys(this.state.ad).length
    return (
      <article>
        {/* display the wrapped component */}
        {this.props.children}

        {hasAnAdBeenLoaded && (
          <aside className="inline-ad">
            <img alt="another annoying ad" src={this.state.ad.thumbnailUrl} />
          </aside>
        )}
      </article>
    )
  }
}

export default ArticleWithAd;
```

Once we create this wrapper component, we can use it **around** any component that we want to add ads to! The drawbacks to this approach are that we can't pass any information to the children; we can only render them! Also since we're just rendering and not sending any data down, it means that the layout for the wrapped components will always depend on the layout of the wrapper!

Let's see an example of a wrapped component!

```js
// wrappedConcept/App.js
import React, { Component } from 'react';
import ArticleWithAd from './ArticleWithAd';

class App extends Component {

  render() {
    return (
      <ArticleWithAd>
        <h1>This is my article title!</h1>
        <p>This is my article body lorem ipsum</p>
        <p>Lorem ipsum some more...</p>
      </ArticleWithAd>
    );
  }

}

export default App;
``` -->
