import React from 'react'
import ReactDom from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App.js'

// mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory()

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDom.render(
    <App history={history}/>,
    el
  )

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location

      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

// if we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root')

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

// export mount function to run through container
export { mount }
