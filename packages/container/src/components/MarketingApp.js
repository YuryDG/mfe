import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/MarketingApp'

export default () => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  })

  // The external app (marketing) will be mounted in this div
  return <div ref={ref} />
}

/**
 * Note that: we could export a component from MarketingApp
 * like this
 * import { MarketingApp } from 'marketing/MarketingApp'
 * but it will make a dependency and a tight coupling between the Container and Marketing app.
 *  That's why we create this simple component to depend only of the "mount" function
 */
