// Import React
import React from "react"

// Import Blocks
import Header from "blocks/Header"
import Footer from "blocks/Footer"

// Import Data
import { sectionTop, sectionBottom } from "data/Footer"

export default class Layout extends React.Component {
  render() {

    const { children } = this.props

    return (
      <>
        <Header />
        {children}
        <Footer
          top={sectionTop}
          bottom={sectionBottom}
        />
      </>
    )
  }
}