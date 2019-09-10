// Import React
import React from "react"

// Import Sub-Components
import Bottom from "./Bottom"
import Top from "./Top"

export default class Footer extends React.Component  {
  render() {

    const { bottom, top } = this.props

    return (
      <>
        <Top
          data={top}
        />
        <Bottom
          data={bottom}
        />
      </>
    )
  }
}