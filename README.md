# Redirect App

This app uses Express to send a redirect header to the browser, making the user go to a new URL.

Simple, rustic javascript.

## To use

Set the `REDIRECT_URI` environment variable to where you want the client (e.g. browser) to be redirected,
and set the `PORT` environment variable to the port you want to run this service on.

That's it; just `yarn && yarn start` after. You can also use a `.env` file locally.

This app works well with the `heroku/nodejs` [buildpack](https://devcenter.heroku.com/articles/buildpacks).
