import React from 'react'
import ReactDom from 'react-dom'
import App from './App.js'

// mount function to start up the app

const mount = el => {
  ReactDom.render(
    <App/>,
    el
  )
}

// if we are in development and in isolation
// call mount immediately

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root')

  if (devRoot) mount(devRoot)
}

// export mount function to run through container
export { mount }
