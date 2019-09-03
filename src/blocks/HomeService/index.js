// Import React
import React from "react"

// Import Sub-Components
import CardService from "./CardService"

// Import Elements
import SectionTitle from "elements/SectionTitle"

// Import Libraries
import { Section, Container, Column } from "rbx"

export default class HomeService extends React.Component {
  render() {

    const { title, subtitle, services } = this.props.data

    return (
      <Section className="home-service">
        <Container>
          <Column.Group>
            <Column>
              <SectionTitle
                title={title}
                subtitle={subtitle}
              />

              <Column.Group multiline>
                {services.map((service, index) => {
                  return (
                    <Column size={4} key={"home-service-item-" + index}>
                      <CardService
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        link={service.link}
                      />
                    </Column>
                  )
                })}
              </Column.Group>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    )
  }
}