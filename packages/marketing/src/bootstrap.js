import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// Mount Function
export const mount = (el) => {
  ReactDOM.render(<App />, el)
}

// In dev mode and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')
  if (devRoot) {
    mount(devRoot)
  }
}

// Otherwise we will assume we are running through container
// and we should export the mount function
