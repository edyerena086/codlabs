// Import React
import React from "react"

// Import Libraries
import { Section, Container, Column } from "rbx"
import { Link } from "gatsby"

export default class Bottom extends React.Component {
  render() {
    return (
      <Section className="footer-bottom">
        <Container>
          <Column.Group>
            <Column>
              {(new Date().getFullYear())} - Todos los derechos reservados
            </Column>

            <Column className="has-text-rigth">
              <ul className="footer-bottom-links">
                <li>
                  <Link to="">Aviso de Privacidad</Link>
                </li>
              </ul>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    )
  }
}