import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/serena.jpg"
// import img from "../../images/serena.jpg"
import Img from "gatsby-image"


const getAbout = graphql`
  {
    aboutImage: file(relativePath: { eq: "handicraft1.jpg" }) {
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
    gem1: file(relativePath: { eq: "gem1.jpg" }) {
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
    handicraft1: file(relativePath: { eq: "handicraft1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    gift1: file(relativePath: { eq: "gift1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    ruby: file(relativePath: { eq: "ruby.jpg" }) {
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
  const data = useStaticQuery(getAbout)
  // const { aboutImage } = useStaticQuery(getAbout)


  return (
    <section className={styles.about}>
      <Title title="Made in Gilgit-Baltistan" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
        
          </div>
        </article>
        
        <article className={styles.aboutInfo}>
      
        </article>
        <div className={styles.imgContainer}>
            <Img
              fluid={data.fourImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>

    
         
        <article className={styles.aboutInfo}>
          <h4>Quality Handicrafts</h4>
          <p>
          Known as "Land of the Mountains" and "Land of Beauty", Gilgit Baltistan is known for some of the most precious arts and crafts the world has to offer 
          </p>
         
        <hr/><br/>

        </article>

        <div className={styles.imgContainer2}>
            <Img
              fluid={data.gem1.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>

        <article className={styles.aboutInfo}>
          <h4>Locally Sourced</h4>
          <p>
            all of our items are sourced from local dealers and manufactures. By purchasing any of our items, you are helping the people of gilgit.
          </p>
         
        </article>
        <hr/><br/>

          <div className={styles.imgContainer2}>
            <Img
              fluid={data.handicraft1.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
          

        {/* <div className={styles.imgContainer2}>
            <Img
              fluid={data.oneImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div> */}
        <article className={styles.aboutInfo}>
          <h4>Authentic</h4>
          <p>
           Our items will give you an authentic feel of culture. This feel is meant to make you feel connected with the people and land of Gilgit no matter where you are in the world.
          </p>
         
        </article>
        <hr/><br/>
 
          <div className={styles.imgContainer}>
            <Img
              fluid={data.ruby.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
          <article className={styles.aboutInfo}>
          <h4>Precious </h4>
          <p>
          A remarkable variety of gemstones occur in Pakistan. The most important are emerald from the Swat Valley and ruby and spinel from the Hunza Valley.
          </p>
         
        </article>
        <hr/><br/>
        <div className={styles.imgContainer}>
            <Img
              fluid={data.gift1.childImageSharp.fluid}
              alt="awesome landscape"
            />
            
          </div>
          <article className={styles.aboutInfo}>
         
          <p>
          These minerals and gems are Found in the the three mountain ranges of Gilgit-Baltistan; Himalayas, Hindukush, and Karakoram
          </p>
         
        </article>
          

      </div>
    <br/><br/>    <hr/><br/><br/>


      <article className={styles.aboutInfo}>
          <h4>100% satisfaction guranteed</h4>
          <p>
            We stand by our quality. 
          </p>
          <Link to="/contact">
          <button type="button" className="btn-primary">
            read more
          </button>
          </Link>
        </article>
       

    </section>
  )
}

export default About
