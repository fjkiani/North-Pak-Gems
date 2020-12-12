import React, {useEffect} from 'react'
import Title from "../Title"
import styles from "../../css/services.module.css"
import services from "../../constants/services"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = ({dat}) => {

  useEffect(() => {
    AOS.init({
    duration : 2000})
}, [])

  return (
    <section className={styles.services}data-aos="fade-in">
      <Title title="About Us" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
