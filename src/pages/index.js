// Import React
import React from "react"

// Import Blocks
import Layout from "blocks/Layout"
import HomeAbout from "blocks/HomeAbout"
import HomeService from "blocks/HomeService"
import HomeTestimonial from "blocks/HomeTestimonial"

// Import Data
import { sectionServices } from "data/HomePage"

const IndexPage = () => (
  <Layout>
    <HomeAbout />
    <HomeService
      data={sectionServices}
    />
    <HomeTestimonial />
  </Layout>
)

export default IndexPage
