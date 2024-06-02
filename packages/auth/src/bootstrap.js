import React from 'react'
import ReactDom from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App.js'

// mount function to start up the app
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [ initialPath ]
  })

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDom.render(
    <App onSignIn={onSignIn} history={history}/>,
    el
  )

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location
      console.log(nextPathname)

      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

// if we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_auth-dev-root')

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

// export mount function to run through container
export { mount }
