// Import React
import React from "react"

// Import Blocks
import Footer from "blocks/Footer"

export default class Layout extends React.Component {
  render() {

    const { children } = this.props

    return (
      <>
        {children}
        <Footer />
      </>
    )
  }
}