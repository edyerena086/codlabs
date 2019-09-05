// Import React
import React from "react"

// Import Elements
import SectionTitle from "elements/SectionTitle"
import TestimonialCard from "elements/TestimonialCard"
import Slider from "react-slick";

// Import Libraries
import { Section, Container, Column } from "rbx"

export default class HomeTestimonial extends React.Component {
  render() {

    const { title, subtitle, testimonials } = this.props.data

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000
    }

    return (
      <Section>
        <Container>
          <Column.Group>
            <Column size={4}></Column>

            <Column size={8}>
              <SectionTitle
                title={title}
                subtitle={subtitle}
              />

              <Slider {...settings}>
                {testimonials.map((testimonial, index) => {
                  return (
                    <TestimonialCard
                      data={testimonial}
                      key={"testimonial-card-" + index}
                    />
                  )
                })}
              </Slider>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    )
  }
}