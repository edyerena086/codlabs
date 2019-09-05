// Import React
import React from "react"

// Import Libraries
import { Card, Generic } from "rbx"

export default class TestimonialCard extends React.Component {
  render() {

    const { testimonial, company, client } = this.props.data

    return (
      <Card className="testimonial-card">
        <Card.Content>
          <Generic as="p" className="has-text-centered">
            {testimonial}
          </Generic>

          <ul className="has-text-centered">
            <li className="client-name">
              {client.name}, {client.job_title}
            </li>
            <li className="company-name">
              {company}
            </li>
          </ul>
        </Card.Content>
      </Card>
    )
  }
}