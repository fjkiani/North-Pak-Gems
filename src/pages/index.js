import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FeaturedTours from "../components/Home/FeaturedTours"
import SEO from "../components/SEO"
export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero home="true" img={data.hero.childImageSharp.fluid}>
      <Banner
        title="North Pakistan Handicrafts & Gems Stones"
        info=" Discover hiden gems of pakistan."
      >
        {/* <AniLink fade to="/tours" className="btn-white">
          explore tours
        </AniLink> */}
      </Banner>
    </StyledHero>
    <Services />
    <About />
    {/* <FeaturedTours /> */}
  </Layout>
)
export const query = graphql`
  query {
    hero: file(relativePath: { eq: "3.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
