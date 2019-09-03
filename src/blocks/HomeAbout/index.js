// Import React
import React from "react"

// Import Elements
import SectionTitle from "elements/SectionTitle"

// Import Libraries
import { Section, Container, Column } from "rbx"

export default class HomeAbout extends React.Component {
  render() {
    return (
      <Section className="bg-light">
        <Container>
          <Column.Group>
            <Column size={5}>
              <SectionTitle
                title="CodLabs"
                subtitle="Agencia de Marketing Digital"
              />
            </Column>
            
            <Column size={7}>
              <p>
                ¡Bienvenid@ a nuestro sitio web!, somos una Agencia especializada en Marketing Digital con base en la ciudad de Monterrey, Nuevo León, México.
              </p>

              <p>
                Nuestro objetivo es apoyar a nuestros clientes a incrementar sus leads, ventas y presencia en Internet a través de campañas de publicidad en medios digitales
              </p>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    )
  }
}