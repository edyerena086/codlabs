// Import React
import React from "react"

// Import Libraries
import { Section, Container, Navbar } from "rbx"
import { Link } from "gatsby"

export default class Header extends React.Component {
  render() {
    return (
      <Section className="header">
        <Container>
          <Navbar>
            <Navbar.Brand>
              CodLabs.
            </Navbar.Brand>

            <Navbar.Menu>
              <Navbar.Segment align="end">
                <Link className="navbar-item">Inicio</Link>

                <Navbar.Item dropdown>
                  <Navbar.Link>Servicios</Navbar.Link>
                  <Navbar.Dropdown>
                    <Link className="navbar-item">About</Link>
                    <Link className="navbar-item">Google Ads</Link>
                  </Navbar.Dropdown>
                </Navbar.Item>

                <Link className="navbar-item is-inverted">Contáctanos</Link>
              </Navbar.Segment>
            </Navbar.Menu>
          </Navbar>
        </Container>
      </Section>
    )
  }
}