# React: State, Events, Forms, Conditional Rendering

![Ott wireframe](ott-wireframe.png)

## Learning Goals

1. Define state in the context of React components
1. Contrast the concepts of props and state
1. Describe the two ways to initialize state in a React component
1. Explain how updating state affects the component
1. List out the function signature (the arguments we pass to) `setState`
1. Identify where `setState` can be called in a React component
1. Explain the differences in writing event handlers in React versus the DOM
1. Describe the difference between event objects in React versus the DOM
1. Explain how to get information from inputs in a React form on submit

## Objectives

- ~~Take the wireframe from our design team and~~
  - ~~Identify components~~
  - ~~Map out the initial component hierarchy~~
- ~~Create a new React app using `create-react-app`~~
  - ~~Remove all boilerplate code~~
  - ~~In [`app`](./ott/src/App.js) component, render "Hello, World!"~~
  - ~~Import dummy data from [`data.js`](./ott/src/data.js)~~
  - ~~Create a static app from the wireframe~~
- **Change all of our Ruby-like naming to JS!**
- Given a component hierarchy and user stories, map out:
  - the state that each component needs
  - any state that should be shared between components
  - the user interactions that should update the state
  - exactly how each user interaction updates state
  - how the user interface should change in response to state change

## Components

|Component|Props|State|
|---|---|---|
|`App`|(no props)||
|`NavigationContainer`|`current_user`, `channels_list`||
|`Profile`|`user`||
|`ChannelsList`|`channels`||
|`MessagesContainer`|`channelName`, `messages`||
|`Message`|`user`, `text`||


## Ongoing Questions/Notes
* Different ways to import functions?
* When and where should I start implementing vanilla JS?
* What is the backend that we're using? How do we interact w/ that in React?
* Passing functions as props; why, how?

## User stories

* ~~When you put in a channel name and press the + button, add that channel to the list of channels~~
* ~~When you send a message, add that message to the messages list~~
* When you click on a channel, you should see the messages for that channel
