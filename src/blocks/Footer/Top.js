// Import React
import React from "react"

// Import Sub-Components
import SocialMedia from "./SocialMedia"

// Import Libraries
import { Section, Container, Column } from "rbx"

export default class Top extends React.Component {
  render()  {
    return (
      <Section className="footer-top">
        <Container>
          <Column.Group>
            <Column size={4}>
              <SocialMedia />
            </Column>
          </Column.Group>
        </Container>
      </Section>
    )
  }
}