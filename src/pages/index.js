// Import React
import React from "react"

// Import Blocks
import Layout from "blocks/Layout"
import HomeAbout from "blocks/HomeAbout"
import HomeService from "blocks/HomeService"
import HomeTestimonial from "blocks/HomeTestimonial"

// Import Data
import { sectionAbout, sectionServices, sectionTestimonials } from "data/HomePage"

const IndexPage = () => (
  <Layout>
    <HomeAbout
      data={sectionAbout}
    />
    <HomeService
      data={sectionServices}
    />
    <HomeTestimonial
      data={sectionTestimonials}
    />
  </Layout>
)

export default IndexPage
