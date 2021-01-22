import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

import { ErrorBoundary } from "react-error-boundary"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Feed from "react-instagram-authless-feed"

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx"

class InstagramSection extends React.Component {
  ErrorFallback({ error }) {
    return <div style={{ display: "none" }}></div>
  }

  render() {
    const { classes } = this.props
    const userName = "rutgersoutintech"
    const mediaLimit = "6"

    return (
      <ErrorBoundary FallbackComponent={this.ErrorFallback}>
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.title}>Check out our Instagram</h2>
              <Feed userName={userName} limit={mediaLimit} />
            </GridItem>
          </GridContainer>
        </div>
      </ErrorBoundary>
    )
  }
}

export default withStyles(productStyle)(InstagramSection)
