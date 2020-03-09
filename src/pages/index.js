import React from "react"

import Layout from "../components/layout"
import Menu from "../components/Menu/Menu"
import Tickets from "../components/section_tickets/Tickets"
// import CFP from "../components/section_cfp/CFP"

import "./styles.scss"

class IndexPage extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const offset = 130;

    const position = window.pageYOffset;

    // console.log(document.querySelectorAll('.main-nav .main-menu__item a'));
    document.querySelectorAll('.main-nav .main-menu__item a').forEach(a => {
      var anchorId = a.getAttribute('href');

      if (anchorId.startsWith('#') && document.querySelector(anchorId)) {
        const target = document.querySelector(anchorId).offsetTop - offset;
        const targetHeight = document.querySelector(anchorId).offsetHeight + target;
        if (position >= target && position < targetHeight) {
          const menuItems = document.querySelectorAll('.main-nav .main-menu__item');
          for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('active');
          }
          a.parentElement.classList.add('active');
        }
      }
    });
  }


  render() {
    return (
    <Layout>
      <Menu />
      <Tickets />
    </Layout>
  
    );
  }
}
 

export default IndexPage;
