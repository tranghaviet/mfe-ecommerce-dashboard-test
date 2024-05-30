import React from 'react'
import ReactDom from 'react-dom'

// mount function to start up the app

const mount = el => {
  ReactDom.render(
    <h1>Hi marketing team</h1>,
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
