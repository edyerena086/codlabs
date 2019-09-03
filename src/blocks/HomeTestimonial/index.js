// Import React
import React from "react"

// Import Elements
import SectionTitle from "elements/SectionTitle"

// Import Libraries
import { Section, Container, Column } from "rbx"

export default class HomeTestimonial extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Column.Group>
            <Column size={4}></Column>

            <Column size={8}>
              <SectionTitle
                title="Testimoniales."
                subtitle="Lo que nuestros clientes dicen de nosotros"
              />
            </Column>
          </Column.Group>
        </Container>
      </Section>
    )
  }
}