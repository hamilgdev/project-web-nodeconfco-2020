import React from "react"
import Sections from "../../images/svg/suelo_bottom.svg"
import "./About.scss"

const About = () => (
  <section className="section-about" id="about">
    <div className="decoration-top">
      <Sections />
    </div>
    <div className="about-outer-wrap">
      <div className="about-inner-wrap  l-container  l-inner-p">
        <h2 className="section-about__title section__title">About</h2>
        <div className="container-data section__description">
          <p className="section-about__information section__description">
            NodeConf Colombia 2020 is the first international event focused on
            the entire Node.js ecosystem. It’s a non-profit event, where our
            attendees will be sharing in an environment of inclusion and
            respect, having access to relevant information through talks,
            workshops, and great experiences with the Colombian Node community.
          </p>
        </div>

        <p className="photos">Want to check out our 2019 event</p>

        <a
          href="https://photos.app.goo.gl/U2KnhMY1g2eksbos8"
          rel="noopener noreferrer"
          target="__blank"
          className="btn-photos btn"
        >
          View event
        </a>
      </div>
    </div>
    <div className="decoration-bottom">
      <Sections />
    </div>
  </section>
)

export default About
