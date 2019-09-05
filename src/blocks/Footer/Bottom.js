// Import React
import React from "react"

// Import Libraries
import { Section, Container, Column } from "rbx"
import { Link } from "gatsby"

export default class Bottom extends React.Component {
  render() {

    const { year, text, links } = this.props.data

    return (
      <Section className="footer-bottom">
        <Container>
          <Column.Group>
            <Column>
              {year} - {text}
            </Column>

            <Column className="has-text-rigth">
              <ul className="footer-bottom-links">
                {links.map((link, index) => {
                  return (
                    <li key={'bottom-footer-link-' + index}>
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  )
                })}
              </ul>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    )
  }
}