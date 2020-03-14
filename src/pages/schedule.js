import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu/Menu"
import ScheduleComponent from "../components/page_schedule/index"
import Suelo from "../images/svg/suelo_bottom.svg"

class Schedule extends React.Component {
  render() {
    return (
      <Layout>
        <Menu />
        <ScheduleComponent />
        <div className="decoration-top">
          <Suelo />{" "}
        </div>
      </Layout>
    )
  }
}

export default Schedule
