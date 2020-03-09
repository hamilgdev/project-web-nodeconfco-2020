import React from "react"

import RamoFlorez from "../../images/svg/ramo_flores.svg";
import "./Tickets.scss"

const Tickets = () => (
  <section className="section-tickets  l-container  l-inner-p" id="tickets">
    
    <h2 className="section-tickets__title section__title">tickets</h2>
    <p className="section-tickets__subtitle">We want to meet you!</p>

    <p className="section-tickets__description section__description">
      Get access to NodeConf Colombia at Ruta N’s complex on June 21st & 22nd with national and international speakers, goodie bag, live translation services (ES ➡︎ EN :: EN ➡︎ ES) and the opportunity to participate in Code+Learn and start contributing to the Node.js project!
    </p>

    <div className="container-tickets">

      <a href="#" className="ticket-link">
        <div className="ticket-card">
          <h3 className="ticket-name">late bird</h3>
          <p className="ticket-price">
            <span className="ticket-symbol">$</span>130
          </p>
          <span className="ticket-decorative">
            <RamoFlorez />
          </span>
        </div>  
      </a>

      <a href="#" className="ticket-link">
        <div className="ticket-card">
          <h3 className="ticket-name">second early bird</h3>
          <p className="ticket-price">
            <span className="ticket-symbol">$</span>100
          </p>
          <span className="ticket-decorative">
            <RamoFlorez />
          </span>
        </div> 
      </a>

      <a href="#" className="ticket-link">
        <div className="ticket-card">
          <h3 className="ticket-name">regular</h3>
          <p className="ticket-price">
            <span className="ticket-symbol">$</span>125
          </p>
          <span className="ticket-decorative">
            <RamoFlorez />
          </span>
        </div> 
      </a>

      {/* <a href="#" className="ticket-link "> */}
        <div className="ticket-card sold-out">
          <h3 className="ticket-name">early bird</h3>
          <p className="ticket-price">
            <span className="ticket-symbol">$</span>100
          </p>
          <p className="ticket-soldOut">sold out</p>
          <span className="ticket-decorative">
            <RamoFlorez />
          </span>
        </div> 
      {/* </a> */}

    </div>

  </section>
)

export default Tickets
