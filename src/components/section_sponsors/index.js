import React from "react"
import Nodesource from "../images/sponsor_example_nodesource"
import Inalambria from "../images/sponsor_inalambria"
import PSL from "../images/sponsor_psl"
import UruIT from "../images/sponsor_uruit"
import Acamica from "../images/sponsor_acamica"
import Rappi from "../images/sponsor_rappi"
import Platinum from "../../images/svg/arbusto_platinum.svg"
import Gold from "../../images/svg/arbusto_gold.svg"
import Silver from "../../images/svg/arbusto_silver.svg"

import "./sponsors.scss"

const SectionSponsors = () => (
  <section className="section-sponsors-view" id="sponsors">
    <h2 className="section-sponsors-view__title section__title">Sponsors</h2>

    <article className="section-sponsors-view__content">
      <div className="section-sponsors-view__medal platinum"><Platinum/></div>
      <div className="section-sponsors-view__data big">
        <a
          className="section-sponsors-view__card"
          href="https://nodesource.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Nodesource />
        </a>
        <a
          className="section-sponsors-view__card"
          href="https://nodesource.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UruIT />
        </a>
        <a
          className="section-sponsors-view__card"
          href="https://www.rutanmedellin.org/es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Rutan /> */}
        </a>
      </div>
    </article>

    <article className="section-sponsors-view__content">
      <div className="section-sponsors-view__medal gold"><Gold/></div>
      <div className="section-sponsors-view__data big">
        <a
          className="section-sponsors-view__card psl"
          href="https://www.pslcorp.com/?utm_source=nodeconf&utm_medium=referral&utm_campaign=nodeconfwebsite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PSL />
        </a>
        <a
          className="section-sponsors-view__card psl"
          href="https://www.pslcorp.com/?utm_source=nodeconf&utm_medium=referral&utm_campaign=nodeconfwebsite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Inalambria />
        </a>
     
        <a
          className="section-sponsors-view__card rappi"
          href="https://www.rappi.com.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Rappi />
        </a>
      </div>
    </article>

    <article className="section-sponsors-view__content">
      <div className="section-sponsors-view__medal silver"><Silver/></div>
      <div className="section-sponsors-view__data big">
        <a
          className="section-sponsors-view__card acamica"
          href="https://www.acamica.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Acamica />
        </a>
      </div>
    </article>

    {/* <div className="inner-wrap-desktop"> */}
      {/* <article className="section-sponsors-view__content bottom">
        <h3 className="section-sponsors-view__tag opportunity">
          Opportunity Supporter
        </h3>
        <div className="section-sponsors-view__data small">
          <a
            className="section-sponsors-view__card getonboard"
            href="https://www.getonbrd.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GetOnBoard />
          </a>

          <a
            className="section-sponsors-view__card inalambria"
            href="https://www.inalambria.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Inalambria />
          </a>

          <a
            className="section-sponsors-view__card github"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>

          <a
            className="section-sponsors-view__card monoku"
            href="https://monoku.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Monoku />
          </a>

          <a
            className="section-sponsors-view__card uruit"
            href="https://www.uruit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UruIT />
          </a>
        </div>
      </article> */}

  

      {/* <article className="section-sponsors-view__content bottom">
        <h3 className="section-sponsors-view__tag  travel">Travel Partners</h3>
        <div className="section-sponsors-view__data  small">
          <a
            className="section-sponsors-view__card"
            href="https://www.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Microsoft />
          </a>
          <a
            className="section-sponsors-view__card github"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            className="section-sponsors-view__card nearform"
            href="https://www.nearform.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Nearform />
          </a>
        </div>
      </article> */}
    {/* </div> */}
  </section>
)

export default SectionSponsors
