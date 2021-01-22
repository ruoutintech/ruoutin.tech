import React from "react"
import { Helmet } from "react-helmet"

class MetaTags extends React.Component {
  render() {
    return (
      <Helmet>
        <html lang="en" />
        <title>Uniting LGBTQ+ in Tech @ Rutgers</title>
        <meta name="title" content="Uniting LGBTQ+ in Tech @ Rutgers" />
        <meta
          name="description"
          content="Official site of the Rutgers Out In Tech Club"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ruoutin.tech/" />
        <meta property="og:title" content="Uniting LGBTQ+ in Tech @ Rutgers" />
        <meta
          property="og:description"
          content="Official site of the Rutgers Out In Tech Club"
        />
        <meta property="og:image" content="../../assets/img/website-screenshot.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ruoutin.tech/" />
        <meta
          property="twitter:title"
          content="Uniting LGBTQ+ in Tech @ Rutgers"
        />
        <meta
          property="twitter:description"
          content="Official site of the Rutgers Out In Tech Club"
        />
        <meta property="twitter:image" content="../../assets/img/website-screenshot.png" />
      </Helmet>
    )
  }
}

export default MetaTags
