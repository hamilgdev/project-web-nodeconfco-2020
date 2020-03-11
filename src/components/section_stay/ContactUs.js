import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import "./ContactUs.scss"

const ContactUs = () => {
  const [email, setEmail] = useState("")
  const [result, setResult] = useState({
    result: "",
    msg: "",
  })

  const _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(email)
    setResult(result)
    console.log("=============================")
    console.log(result)
    console.log("=============================")
  }

  return (
    <section className="contact-us-component contact-us" id="tuned">
      <div className="stay-tuned  l-container  l-inner-p">
        <h2 className="title  section__title">stay tuned</h2>
        <div className="email">
          <form onSubmit={_handleSubmit}>
            <input
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              aria-required="true"
              aria-label="Email address"
              placeholder="Email address"
            ></input>
            <button type="submit">Sign up</button>
          </form>
          {result.result === "success" && (
            <div className="success">{result.msg}</div>
          )}
          {result.result === "error" && (
            <div
              className="error"
              dangerouslySetInnerHTML={{ __html: result.msg }}
            />
          )}
        </div>
        <div className="social">
          <div className="text">
            <h3 className="contact-us">CONTACT US</h3>
            <a
              className="nodeconf-email"
              href="mailto:hola@nodeconf.co"
              rel="noopener noreferrer"
            >
              hola@nodeconf.co
            </a>
          </div>
        </div>
        <div className="icons">
            <a
              href="https://twitter.com/NodeConfCo"
              target="__blank"
              aria-label="icon-twitter"
            >
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 96 99.87"
              >
                <g id="Capa_2" data-name="Capa 2">
                  <g id="icon-twitter">
                    <path
                      className="orquideorama"
                      d="M86.45,49.9,96,66.58,86.45,83.19H67.2L57.65,99.87H38.41L28.79,83.19H9.62L0,66.58,9.62,49.9,0,33.29,9.62,16.68H28.79L38.41,0H57.65L67.2,16.68H86.45L96,33.29Z"
                      fill="#59C079"
                    />
                    <path
                      id="twitter"
                      d="M72,35.1a19.51,19.51,0,0,1-5.67,1.52,9.75,9.75,0,0,0,4.33-5.42,19.48,19.48,0,0,1-6.24,2.38,9.85,9.85,0,0,0-17,6.73,11.32,11.32,0,0,0,.25,2.25A27.93,27.93,0,0,1,27.35,32.24a9.66,9.66,0,0,0-1.33,5,9.84,9.84,0,0,0,4.38,8.2A10,10,0,0,1,26,44.19v.12a9.84,9.84,0,0,0,7.91,9.62,10.33,10.33,0,0,1-2.59.33,13.13,13.13,0,0,1-1.88-.16,9.88,9.88,0,0,0,9.2,6.83A19.73,19.73,0,0,1,26.37,65.1,18.81,18.81,0,0,1,24,65a27.86,27.86,0,0,0,15.1,4.41c18.09,0,28-15,28-28V40.11A21.38,21.38,0,0,0,72,35.1Z"
                      fill="#EBEBEB"
                    />
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nodeconf_co"
              target="__blank"
              aria-label="icon-instagram"
            >
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 96 99.88"
              >
                <g id="Capa_2" data-name="Capa 2">
                  <g id="icon-instagram">
                    <path
                      id="orquideorama"
                      d="M86.45,49.9,96,66.58,86.45,83.2H67.21L57.66,99.88H38.41L28.79,83.2H9.62L0,66.58,9.62,49.9,0,33.29,9.62,16.68H28.79L38.41,0H57.66l9.55,16.68H86.45L96,33.29Z"
                      fill="#59C079"
                    />
                    <path
                      id="instagram"
                      d="M48,41.93a8,8,0,1,0,8,8A8,8,0,0,0,48,41.93Zm24,8c0-3.32,0-6.6-.16-9.91C71.66,36.19,70.78,32.78,68,30s-6.22-3.69-10.06-3.87c-3.32-.19-6.6-.16-9.91-.16s-6.6,0-9.91.16C34.25,26.28,30.84,27.16,28,30S24.34,36.19,24.16,40C24,43.35,24,46.63,24,49.94s0,6.6.16,9.9c.18,3.85,1.06,7.26,3.87,10.07s6.22,3.68,10.06,3.87c3.32.19,6.6.16,9.91.16s6.6,0,9.91-.16c3.84-.19,7.25-1.06,10.06-3.87s3.69-6.22,3.87-10.07C72,56.54,72,53.25,72,49.94ZM48,62.25A12.32,12.32,0,1,1,60.31,49.94,12.3,12.3,0,0,1,48,62.25ZM60.81,40a2.88,2.88,0,1,1,2.88-2.88,3,3,0,0,1-.22,1.1,2.81,2.81,0,0,1-.62.93,3,3,0,0,1-.94.63A3,3,0,0,1,60.81,40Z"
                      fill="#EBEBEB"
                    />
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/nodeconfco"
              target="__blank"
              aria-label="icon-facebook"
            >
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 96 99.88"
              >
                <g id="Capa_2" data-name="Capa 2">
                  <g id="icon-facebook">
                    <path
                      id="orquideorama"
                      d="M86.45,49.9,96,66.58,86.45,83.2H67.21L57.66,99.88H38.41L28.79,83.2H9.62L0,66.58,9.62,49.9,0,33.29,9.62,16.68H28.79L38.41,0H57.66l9.55,16.68H86.45L96,33.29Z"
                      fill="#59C079"
                    />
                    <path
                      id="facebook"
                      d="M61.9,53.67l1.66-10.81H53.19v-7c0-3,1.45-5.84,6.09-5.84H64V20.79a57.54,57.54,0,0,0-8.37-.73c-8.55,0-14.13,5.18-14.13,14.56v8.24H32V53.67h9.5V79.81H53.19V53.67Z"
                      fill="#EBEBEB"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
      </div>
    </section>
  )
}

export default ContactUs
