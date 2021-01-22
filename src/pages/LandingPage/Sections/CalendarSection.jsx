import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

import { ErrorBoundary } from "react-error-boundary"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx"

class CalendarSection extends React.Component {
  ErrorFallback({ error }) {
    return <div style={{ display: "none" }}></div>
  }

  render() {
    const { classes } = this.props

    return (
      <ErrorBoundary FallbackComponent={this.ErrorFallback}>
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.title}>Upcoming Events</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<iframe src="https://calendar.google.com/calendar/embed?src=c6akf4kojok5io0o4sg9msgbtg%40group.calendar.google.com&ctz=America%2FNew_York" style="border: 0" width="90%" height="600" frameborder="0" scrolling="no"></iframe>',
                }}
              />
              ;
            </GridItem>
          </GridContainer>
        </div>
      </ErrorBoundary>
    )
  }
}

export default withStyles(productStyle)(CalendarSection)
