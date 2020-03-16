import React from "react"
import Team from "./team"
import { team } from "../../constants/team"
import "./team.scss"

const sectionTeam = () => (
  <section className="section-team  l-container  l-inner-p" id="team">
    <h2 className="section-team__title section__title">Our team</h2>

    <div className="inner-wrap-desktop first-row">
      <Team {...team.julian} />
      <Team {...team.adrian} />
      <Team {...team.alejandro} />
      <Team {...team.maleja} />
    </div>
    <div className="inner-wrap-desktop additional-row">
      <Team {...team.diego} />
      <Team {...team.nicolle} />
      <Team {...team.sebastian} />
    </div>
    <div className="inner-wrap-desktop additional-row">
      <Team {...team.jonathan} />
      <Team {...team.hamilton} />
      <Team {...team.stiwar} />
      <Team {...team.jorman} />
    </div>
  </section>
)

export default sectionTeam
