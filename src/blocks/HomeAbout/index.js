// Import React
import React from "react"

// Import Elements
import SectionTitle from "elements/SectionTitle"

// Import Libraries
import { Section, Container, Column } from "rbx"
import ReactHtmlParser from "react-html-parser"

export default class HomeAbout extends React.Component {
  render() {

    const { title, subtitle, text } = this.props.data

    return (
      <Section className="bg-light">
        <Container>
          <Column.Group>
            <Column size={5}>
              <SectionTitle
                title={title}
                subtitle={subtitle}
              />
            </Column>
            
            <Column size={7}>
              {ReactHtmlParser(text)}
            </Column>
          </Column.Group>
        </Container>
      </Section>
    )
  }
}