import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/logo"

import "./header.scss"

const Header = () => (
  <header className="header l-container--full  banner">
    
    <h1>Test Node Conf Colombia | 2020</h1>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
