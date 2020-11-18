import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/serena.jpg"
// import img from "../../images/serena.jpg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const getAbout = graphql`
  {
    aboutImage: file(relativePath: { eq: "serena.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    giftImage: file(relativePath: { eq: "gift1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    giftImage2: file(relativePath: { eq: "gilgitFruit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    oneImage: file(relativePath: { eq: "1.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    twoImage: file(relativePath: { eq: "2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    threeImage: file(relativePath: { eq: "3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    gilgitFruit2: file(relativePath: { eq: "gilgitFruit2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fourImage: file(relativePath: { eq: "4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = ({dat}) => {
  const { aboutImage } = useStaticQuery(getAbout)
  const data = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="About us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        
        <article className={styles.aboutInfo}>
          <h4>Located in Gilgit Serena Hotel</h4>
          <p>
            Our shop is located inside of Gilgit Serena Hotel
          </p>
          
          {/* <button type="button" className="btn-primary">
            read more
          </button> */}
        </article>
        <div className={styles.imgContainer}>
            <Img
              fluid={data.giftImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
          

        <div className={styles.imgContainer2}>
            <Img
              fluid={data.gilgitFruit2.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>

          <article className={styles.aboutInfo}>
          <h4>Locally Made</h4>
          <p>
            all of our items are sourced from local dealers and manufactures. By purchasing any of our items, you are helping the people of gilgit.
          </p>
         
          
       
        </article>
          <div className={styles.imgContainer}>
            <Img
              fluid={data.twoImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
          

        <div className={styles.imgContainer2}>
            <Img
              fluid={data.oneImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
  
          <div className={styles.imgContainer2}>
            <Img
              fluid={data.fourImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
          
      </div>
    <hr/><br/><br/>
      <article className={styles.aboutInfo}>
          <h4>100% satisfaction guranteed</h4>
          <p>
            We stand by our quality. 
          </p>
         
        </article>
       

    </section>
  )
}

export default About
