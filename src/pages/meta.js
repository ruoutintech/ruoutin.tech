import React from "react"
import { Helmet } from "react-helmet"

class MetaTags extends React.Component {
  render() {
    return (
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Rutgers, Out In Tech, RU, OIT, LGBTQ+, Gay, Queer, Ally, Club"
        />
        <meta
          name="description"
          content="Website for Rutgers Out In Tech Club"
        />
        <meta name="author" content="Hugo De Moraes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://ruoutin.tech/" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Uniting LGBTQ+ in Tech @ Rutgers</title>
        <meta name="title" content="Uniting LGBTQ+ in Tech @ Rutgers" />
        <meta
          name="description"
          content="Website for Rutgers Out In Tech Club"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ruoutin.tech/" />
        <meta property="og:title" content="Uniting LGBTQ+ in Tech @ Rutgers" />
        <meta
          property="og:description"
          content="Website for Rutgers Out In Tech Club"
        />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ruoutin.tech/" />
        <meta
          property="twitter:title"
          content="Uniting LGBTQ+ in Tech @ Rutgers"
        />
        <meta
          property="twitter:description"
          content="Website for Rutgers Out In Tech Club"
        />
        <meta property="twitter:image" content="" />
      </Helmet>
    )
  }
}

export default MetaTags;
