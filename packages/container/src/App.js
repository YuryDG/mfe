import React from 'react'
import MarketingApp from './components/MarketingApp'
// Note that: we create this component inside the container,
// inside it uses the mount exported for marketing app to mount the component

export default () => {
  return (
    <div>
      <h1>Hi there !</h1>
      <hr />
      <MarketingApp />
    </div>
  )
}
