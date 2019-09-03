// Import React
import React from "react"

// Import Libraries
import { Title } from "rbx"

export default class SectionTitle extends React.Component {
  render() {

    const { title, subtitle } = this.props

    return (
      <Title as="h2">
        {title}
        <span>{subtitle}</span>
      </Title>
    )
  }
}