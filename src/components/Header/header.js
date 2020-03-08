import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/logo"
import HeaderSelva from "../../images/svg/header_selva.svg";

import "./header.scss"

const Header = () => (

  <header className="header ">

      <a href="/" className="logo logo-mobile">
        <Logo alt="logotipo NodeConf Colombia"/>
      </a>

    <div className="header-description">
      <h1 className="header-description__title">colombia</h1>
      <p className="header-description__subtitle">nodeconfco 2020</p>
    </div>

    <div className="calendar-content calendar calendar-left">
      <h3 className="calendar-month">july</h3>
      <div className="calendar-info">
        <p className="calendar-data">day</p>
        <p className="calendar-day">
          10<span className="calendar-format">th</span>
        </p>
      </div> 
    </div>

    <div className="calendar-content calendar calendar-right">
      <h3 className="calendar-month">july</h3>
      <div className="calendar-info">
        <p className="calendar-data">day</p>
        <p className="calendar-day">
          11<span className="calendar-format">th</span>
        </p>
      </div> 
    </div>

    <a href="#" className="btn-cta btn">buy tickets</a>

    <div className="header-background">
      <HeaderSelva />
    </div>
  
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
