# React: State, Events, Forms, Conditional Rendering

![Ott wireframe](ott-wireframe.png)

## Learning Goals

1. Define the concept of lifting state
1. Define the concept of a controlled form or input
1. Describe the direction of data flow in React components
1. Describe inverse data flow
1. Provide a use case for controlling form inputs

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
* ~~When you click on a channel, you should see the messages for that channel~~
* When you send a message, add that message to the messages list
