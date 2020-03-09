import React from "react"
import { navigate } from 'gatsby'

// import BtnMenu from "../../images/icons/icon-menu.svg"
import Logo from "../images/logo"
import "./Menu.scss"


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuActive: false
    };
  }

  scroll = (e, anchorId, offset = 125) => {
    e.preventDefault();

    const menuItems = document.getElementsByClassName('main-menu__item');
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('active');
    }

    if (document.getElementById(anchorId)) {
      const target = document.getElementById(anchorId).offsetTop - offset;
      window.scroll({
        top: offset === 0 ? offset : target,
        behavior: 'smooth'
      });
    } else {
      navigate(`/#${anchorId}`);
    }
  }

  scrollMobile = (e, section, offset) => {
    this.scroll(e, section, offset)
    this.handleToggleMenu();
  }

  handleToggleMenu = () => {
    this.setState({ mobileMenuActive: !this.state.mobileMenuActive });
  }

  activeClass = () => {
    return this.state.mobileMenuActive ? 'active' : '';
  }

  render() {
    return (
    <nav className="main-nav">
      <button className="btn-menu" id="btn-menu">
        <span className="icon-bar">
          <svg width="48" height="24" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.83333 16H23.1667C23.9 16 24.5 15.4 24.5 14.6667C24.5 13.9333 23.9 13.3333 23.1667 13.3333H1.83333C1.1 13.3333 0.5 13.9333 0.5 14.6667C0.5 15.4 1.1 16 1.83333 16ZM1.83333 9.33333H23.1667C23.9 9.33333 24.5 8.73333 24.5 8C24.5 7.26667 23.9 6.66667 23.1667 6.66667H1.83333C1.1 6.66667 0.5 7.26667 0.5 8C0.5 8.73333 1.1 9.33333 1.83333 9.33333ZM0.5 1.33333C0.5 2.06667 1.1 2.66667 1.83333 2.66667H23.1667C23.9 2.66667 24.5 2.06667 24.5 1.33333C24.5 0.6 23.9 0 23.1667 0H1.83333C1.1 0 0.5 0.6 0.5 1.33333Z" fill="#EBEBEB"/>
          </svg>
        </span>
      </button>
      <div className="navigation" id="navigation">
        <ul className="main-menu  l-container" id="main-menu">

          <li className="main-menu__item">
            <a
            className="main-menu__link"
            tittle="Tickets"
            href="#tickets"
            onClick={e => this.scrollMobile(e, 'tickets')}
            >
              tickets
            </a>
          </li>

          <li className="main-menu__item">
            <a
            className="main-menu__link"
            tittle="CFP"
            href="#cfp"
            onClick={e => this.scrollMobile(e, 'cfp')}
            >
              cfp
            </a>
          </li>

          <li className="main-menu__item">
            <a
            className="main-menu__link"
            tittle="Speakers"
            href="#speakers"
            onClick={e => this.scrollMobile(e, 'speakers')}
            >
              speakers
            </a>
          </li>

          <li className="main-menu__item">
            <a
            className="main-menu__link"
            tittle="Venue"
            href="#venue"
            onClick={e => this.scrollMobile(e, 'venue')}
            >
              venue
            </a>
          </li>
          
          <li className="main-menu__item">
            <a
            className="main-menu__link"
            tittle="About"
            href="#about"
            onClick={e => this.scrollMobile(e, 'about')}
            >
              about
            </a>
          </li>

          <a href="/" className="logo logo-menu">
            <Logo alt="logotipo NodeConf Colombia"/>
          </a>

          <li className="main-menu__item">
            <a
            className="main-menu__link"
            tittle="Team"
            href="#team"
            onClick={e => this.scrollMobile(e, 'team')}
            >
            team
            </a>
          </li>

          <li className="main-menu__item">
            <a
            className="main-menu__link"
            tittle="Sponsors"
            href="#sponsors"
            onClick={e => this.scrollMobile(e, 'sponsors')}
            >
            sponsors
            </a>
          </li>

          <li className="main-menu__item">
            <a
            className="main-menu__link"
            tittle="Stay tuned"
            href="#tuned"
            onClick={e => this.scrollMobile(e, 'tuned')}
            >
            stay tuned
            </a>
          </li>

          <li className="main-menu__item">
            <a
            className="main-menu__link"
            tittle="Schedule"
            href="#schedule"
            onClick={e => this.scrollMobile(e, 'schedule')}
            >
            schedule
            </a>
          </li>

          <li className="main-menu__item">
            <a
            className="main-menu__link"
            tittle="v.2019"
            href="#v2019"
            onClick={e => this.scrollMobile(e, 'v2019')}
            >
            v.2019
            </a>
          </li>

        </ul>
      </div>
    </nav>
    );
  }
}

export default Menu
