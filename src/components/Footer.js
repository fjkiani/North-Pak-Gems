import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path}>
              {item.text}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.contact}>
      <h2>Contact Details:</h2>
          <p>GILGIT SERENA HOTEL
          Sherullah Baig Road Jutial
          Gilgit, Pakistan</p>
          <br/>
        <p>+92-331-980-7200</p>    
        <p><a href="mailto:official.gbpak@gmail.com">Official.GBPak@gmail.com</a></p>
      </div>
      <div className={styles.copyright}>
        copyright &copy; GB Pakistan Tour & Travel {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer
