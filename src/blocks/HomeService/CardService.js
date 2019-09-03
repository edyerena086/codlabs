// Import React
import React from "react"

// Import Libraries
import { Card } from "rbx"
import { FaDesktop, FaSearchLocation, FaShoppingCart, FaGoogle, FaThumbsUp } from "react-icons/fa"
import { Link } from "gatsby";

export default class CardService extends React.Component {

  renderCardIcon = icon => {
    switch (icon) {
      case "desktop":
        return <FaDesktop />
        break;
      case "seo":
        return <FaSearchLocation />
        break;
      case "shopping":
        return <FaShoppingCart />
        break;
      case "sm":
        return <FaThumbsUp />
        break;
      case "google":
        return <FaGoogle />
        break;
    }
  }

  render() {

    const { icon, title, description, link } = this.props

    return (
      <Link to={link}>
        <Card>
          <Card.Content>
            <h3 className="has-text-centered">
              {this.renderCardIcon(icon)}<br/>
              {title}
            </h3>

            <p className="body-small">
              {description}
            </p>
          </Card.Content>
        </Card>
      </Link>
    )
  }
}