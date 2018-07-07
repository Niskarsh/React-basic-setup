# React-basic-setup

Basically React-basic-setup provides anything and everything a beginner need to setup his/her first react app using Webpack, Babel, and Express
## Dependencies

### babel-polyfill
```js
import 'babel-polyfill'
```
**babel-polyfill** basically lets you write promises, maps, generator function in ES6 notation
### concurrently
```js
concurrently "command 1" "command 2"
```
This module lets you run more than one command in  your **start** script
### express
```js
import express from 'express'
let app = express()
```
Lets you create a **server** on a specified **port** (given its not **used** already) to host **index.html**(as per needed in React)
### react and react-dom
```js
import React from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render ()
```
Lets you use react and render component to a specific target container
