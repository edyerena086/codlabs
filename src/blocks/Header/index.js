// Import React
import React from "react"

// Import Libraries
import { Section, Container, Navbar } from "rbx"
import { Link } from "gatsby"

export default class Header extends React.Component {

  renderNavabrItem = item => {
    if (item.children) {
      return (
        <Navbar.Item dropdown>
          <Navbar.Link>{item.title}</Navbar.Link>
          <Navbar.Dropdown>
            {item.children.map((element, index) => {
              return (
                <Link to={element.link} className="navbar-item" key={item.link.substring(1) + '-' + index}>{element.title}</Link>
              )
            })}
          </Navbar.Dropdown>
        </Navbar.Item>
      )
    } else {
      return (
        <Link to={item.link} className={item.inverted ? 'navbar-item is-inverted' : 'navbar-item'} key={item.link}>{item.title}</Link>
      )
    }
  }

  render() {

    const { navbar } = this.props

    return (
      <Section className="header">
        <Container>
          <Navbar>
            <Navbar.Brand>
              CodLabs.
            </Navbar.Brand>

            <Navbar.Menu>
              <Navbar.Segment align="end">
                {navbar.map((item, index) => {
                  return (
                    this.renderNavabrItem(item)
                  )
                })}
              </Navbar.Segment>
            </Navbar.Menu>
          </Navbar>
        </Container>
      </Section>
    )
  }
}