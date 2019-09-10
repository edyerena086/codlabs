// Import React
import React from "react"

// Import Sub-Components
import SocialMedia from "./SocialMedia"

// Import Libraries
import { Section, Container, Column } from "rbx"

export default class Top extends React.Component {
  render()  {

    const { social_media } = this.props.data

    return (
      <Section className="footer-top">
        <Container>
          <Column.Group>
            <Column size={4}>
              <SocialMedia
                data={social_media}
              />
            </Column>
          </Column.Group>
        </Container>
      </Section>
    )
  }
}