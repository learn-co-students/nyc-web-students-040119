# Building `withAuth` with `react-router-dom`

> **Note:** This guide uses the ending code from Guide 4: `withAuth` Example

## Steps

### 1: `react-router-dom` setup

* Import `BrowserRouter`, `Switch` and `Route` from `react-router-dom`
* Wrap `App` in the `BrowserRouter` and get rid of the `Fragment`
* Create routes for each of the pages on your site inside of the `Switch`

### 2: Redirect when you need a user to log in

* We already have the profile page wrapped in `withAuth`
* Instead of rendering "Please log in!" we can send them straight to the login page
* Import `Link` from `react-router-dom` to render a message asking the user to log in
