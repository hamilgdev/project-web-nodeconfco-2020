import React, { Component } from "react"
import Jardin from "../../images/svg/footer_jardin.svg"
import "./Footer.scss"

export default class Footer extends Component {
  render() {
    return (
      <section className="section-footer">
        <div className="decoretion-top">
          <Jardin />{" "}
        </div>
        <div className="footer-inner-wrap  l-container  l-inner-p">
          <p>NodeConf Colombia is an event by Mantid LLC </p>
        </div>
      </section>
    )
  }
}
