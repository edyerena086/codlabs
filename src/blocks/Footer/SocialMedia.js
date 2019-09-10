// Import React
import React from "react"

// Import Libraries
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

export default class SocialMedia extends React.Component {

  renderSocialIcon = icon => {
    let iconToRender;

    switch (icon) {
      case "facebook":
        iconToRender = <FaFacebookF />
        break
      case "twitter":
        iconToRender = <FaTwitter />
        break
      default:
        iconToRender = <FaInstagram />
        break
    }

    return iconToRender
  }

  render()  {

    const { data } = this.props

    return (
      <ul className="social-media">
        {data.map((item, index) => {
          return (
            <li key={'social-media-link-' + index}>
              <a href={item.link}>
                {this.renderSocialIcon(item.channel)}
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}