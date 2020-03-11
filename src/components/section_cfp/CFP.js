import React from "react"
import Sections from "../../images/svg/suelo_bottom.svg";


import "./CFP.scss"

const CFP = () => (
  <section className="section-cfp" id="cfp">
    
    <div className="decoration-top">
      <Sections />
    </div>

    <div className="cfp-outer-wrap">

      <div className="cfp-inner-wrap  l-container  l-inner-p">

        <h2 className="section-cfp__title section__title">call for speakers</h2>
      
        <p className="section-cfp__subtitle">got a talk idea? we wan to see it!</p>

        <div className="container-data section__description">

          <p className="cfp-open">
            <span className="cfp-icon-clock">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.75 29.466C20.1448 29.466 23.4005 28.1174 25.801 25.717C28.2014 23.3165 29.55 20.0608 29.55 16.666C29.55 13.2712 28.2014 10.0155 25.801 7.61505C23.4005 5.21458 20.1448 3.86602 16.75 3.86602C13.3552 3.86602 10.0995 5.21458 7.69903 7.61505C5.29857 10.0155 3.95 13.2712 3.95 16.666C3.95 20.0608 5.29857 23.3165 7.69903 25.717C10.0995 28.1174 13.3552 29.466 16.75 29.466ZM16.75 0.666016C18.8512 0.666016 20.9317 1.07987 22.8729 1.88394C24.8141 2.68802 26.578 3.86657 28.0637 5.35231C29.5494 6.83804 30.728 8.60187 31.5321 10.5431C32.3361 12.4843 32.75 14.5649 32.75 16.666C32.75 20.9095 31.0643 24.9791 28.0637 27.9797C25.0631 30.9803 20.9935 32.666 16.75 32.666C7.902 32.666 0.75 25.466 0.75 16.666C0.75 12.4226 2.43571 8.35289 5.43629 5.35231C8.43687 2.35173 12.5065 0.666016 16.75 0.666016ZM17.55 8.66602V17.066L24.75 21.338L23.55 23.306L15.15 18.266V8.66602H17.55Z" fill="#EBEBEB"/>
            </svg>
            </span> cfp opens at 9:00 am
          </p>

          <p className="cfp-close">
            <span className="cfp-icon-clock">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.75 29.466C20.1448 29.466 23.4005 28.1174 25.801 25.717C28.2014 23.3165 29.55 20.0608 29.55 16.666C29.55 13.2712 28.2014 10.0155 25.801 7.61505C23.4005 5.21458 20.1448 3.86602 16.75 3.86602C13.3552 3.86602 10.0995 5.21458 7.69903 7.61505C5.29857 10.0155 3.95 13.2712 3.95 16.666C3.95 20.0608 5.29857 23.3165 7.69903 25.717C10.0995 28.1174 13.3552 29.466 16.75 29.466ZM16.75 0.666016C18.8512 0.666016 20.9317 1.07987 22.8729 1.88394C24.8141 2.68802 26.578 3.86657 28.0637 5.35231C29.5494 6.83804 30.728 8.60187 31.5321 10.5431C32.3361 12.4843 32.75 14.5649 32.75 16.666C32.75 20.9095 31.0643 24.9791 28.0637 27.9797C25.0631 30.9803 20.9935 32.666 16.75 32.666C7.902 32.666 0.75 25.466 0.75 16.666C0.75 12.4226 2.43571 8.35289 5.43629 5.35231C8.43687 2.35173 12.5065 0.666016 16.75 0.666016ZM17.55 8.66602V17.066L24.75 21.338L23.55 23.306L15.15 18.266V8.66602H17.55Z" fill="#EBEBEB"/>
              </svg>
            </span> cfp close at 11:59 pm
          </p>

          <p className="cfp-start">
            <span className="cfp-icon-calendar">
              <svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1944 4.22157H25.6389V0.666016H22.0833V4.22157H11.4167V0.666016H7.86111V4.22157H4.30556C2.34467 4.22157 0.75 5.81624 0.75 7.77713V32.666C0.75 34.6269 2.34467 36.2216 4.30556 36.2216H29.1944C31.1553 36.2216 32.75 34.6269 32.75 32.666V7.77713C32.75 5.81624 31.1553 4.22157 29.1944 4.22157ZM29.198 32.666H4.30556V8.33268H29.1944L29.198 32.666Z" fill="#EBEBEB"/>
                <path d="M14.9722 27.0687L25.118 16.923L22.6042 14.4092L14.9722 22.0412L10.8957 17.9647L8.38196 20.4785L14.9722 27.0687Z" fill="#EBEBEB"/>
              </svg>
            </span> 08 jan 2020
          </p>

          <p className="cfp-end">
            <span className="cfp-icon-calendar">
              <svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1944 4.22157H25.6389V0.666016H22.0833V4.22157H11.4167V0.666016H7.86111V4.22157H4.30556C2.34467 4.22157 0.75 5.81624 0.75 7.77713V32.666C0.75 34.6269 2.34467 36.2216 4.30556 36.2216H29.1944C31.1553 36.2216 32.75 34.6269 32.75 32.666V7.77713C32.75 5.81624 31.1553 4.22157 29.1944 4.22157ZM29.198 32.666H4.30556V8.33268H29.1944L29.198 32.666Z" fill="#EBEBEB"/>
                <path d="M14.9722 27.0687L25.118 16.923L22.6042 14.4092L14.9722 22.0412L10.8957 17.9647L8.38196 20.4785L14.9722 27.0687Z" fill="#EBEBEB"/>
              </svg>
            </span> 12 apr 2020
          </p>

          <a href="https://sessionize.com/nodeconfco2020" rel="noopener noreferrer" target="__blank" className="btn-submit btn">submit yours</a>

        </div>

        <p className="section-cfp__information section__description">
            This event is in UTC-05:00 - Bogotá, Lima, Quito. Rio Branco time zone.
        </p>

        <p className="section-cfp__description section__description">
            We want you to be part of NodeConf Colombia 2020; We are the first exclusive Node.js conference in Colombia, where community members from around the world come together to learn and share information about the latest trends and technologies in Node.js development. Apply now. This call for presenters closes at 11:59 PM EST on February 28TH, 2020.
        </p>

      </div>

    </div>

    <div className="decoration-bottom">
      <Sections />
    </div>


  </section>
)

export default CFP
