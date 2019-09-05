// Import React
import React from "react"

// Import Libraries
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

export default class SocialMedia extends React.Component {
  render()  {
    return (
      <ul className="social-media">
        <li>
          <a>
            <FaFacebookF />
          </a>
        </li>

        <li>
          <a>
            <FaTwitter />
          </a>
        </li>

        <li>
          <a>
            <FaInstagram />
          </a>
        </li>
      </ul>
    )
  }
}