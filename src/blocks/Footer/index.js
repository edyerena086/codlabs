// Import React
import React from "react"

// Import Sub-Components
import Bottom from "./Bottom"
import Top from "./Top"

// Import Libraries
import { Section, Container, Column } from "rbx"

export default class Footer extends React.Component  {
  render() {
    return (
      <>
        <Top />
        <Bottom />
      </>
    )
  }
}