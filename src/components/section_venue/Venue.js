import React from "react"
import Rutan from "../images/photo_rutaN"
import Hotelramas from "../../images/svg/hotel_ramas.svg"
import Maphotel from "../images/hotel10"
import Jardin from "../../images/svg/jardin.svg"
import "./Venue.scss"

const Venue = () => (
  <section className="section-venue" id="venue">
    <div className="venue-outer-wrap">
      <div className="venue-inner-wrap  l-container  l-inner-p">
        <h2 className="section-venue__title section__title">Venue</h2>

        <div className="container-data section__description">
          <p className="section-venue__information section__description">
            Complejo Ruta N Calle 67 N° 52-20
          </p>

          <p className="section-venue__information section__description">
            Medellín - Colombia
          </p>

          <p className="section-venue__information section__description">
            Strategic location, with easy access to all of the city's points of
            interest.
          </p>

          <a
            href="https://www.rutanmedellin.org/es/"
            rel="noopener noreferrer"
            target="__blank"
            className="btn-rutan btn"
          >
            ruta n
          </a>
        </div>
      </div>
    </div>
    <div className="image-rutan">
      <Rutan />
    </div>

    <div className="section-hotel">
      <h2 className="section-hotel__subtitle section__subtitle">
        Hotels we recomend
      </h2>

      <div className="container-data section__description">
        <p className="section-venue__information section__description">
          Calle 10 A N° 34-11
        </p>
        <p className="section-venue__information section__description">
          Phone (+57 4) 448-10-34
        </p>
        <p className="section-venue__information section__description">
          Medellín, Antioquía
        </p>
      </div>

      <div className="hotel-ramas">
        <Hotelramas />
      </div>
      <div className="map_hotel">
        <Maphotel />
      </div>

      <a
        href="https://reservations.travelclick.com/103293?groupID=2732208"
        rel="noopener noreferrer"
        target="__blank"
        className="btn-reservation btn"
      >
        Reservation
      </a>
    </div>
    
    <div className="ramas__mobile">
      <Hotelramas />
    </div>

    <div className="section-code_conduct">
      <div className="jardin">
        <Jardin />
      </div>
      <div className="container-data section__description">
        <h2 className="section-code_conduct__title section__title">
          Code conduct
        </h2>
        <p className="section-code_conduct__information section__description">
          NodeConf is dedicated to providing a harassment-free conference
          experience for everyone, regardless of gender, gender identity and
          expression, age, sexual orientation, disability, physical appearance,
          body size, race, ethnicity, religion (or lack thereof), or technology
          choices.
        </p>
        <p className="section-code_conduct__information section__description">
          We do not tolerate harassment of conference participants in any form.
          Sexual language and imagery is not appropriate for any conference
          venue, including talks, workshops, parties, Twitter and other online
          media. Conference participants violating these rules may be sanctioned
          or expelled from the conference without a refund at the discretion of
          the conference organisers.
        </p>

        <a
          href="https://jsconf.com/codeofconduct.html"
          rel="noopener noreferrer"
          target="__blank"
          className="btn-more btn"
        >
          More info
        </a>
      </div>
    </div>
  </section>
)

export default Venue
