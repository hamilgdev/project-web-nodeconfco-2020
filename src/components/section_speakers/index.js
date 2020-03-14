import React from "react"
import Speakers from "./Speakers"
import { speakers } from "../../constants/speakers"
import "./Speakers.scss"

const sectionSpeakers = () => (

  <section className="section-speakers  l-container  l-inner-p" id="speakers">

    <h2 className="section-speakers__title  section__title">our speakers</h2>
  
    <article className="content-speakers">
      <Speakers {...speakers.beth} />
      <Speakers {...speakers.shelley} />
      <Speakers {...speakers.indutny} />
      <Speakers {...speakers.guillermo} />
      <Speakers {...speakers.juan} />
    </article>

  </section>

)

export default sectionSpeakers
