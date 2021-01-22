import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import FormDialog from "components/FormDialog/FormDialog.jsx"

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx"

// Sections for this page
import AboutSection from "./Sections/AboutSection.jsx"
import InstagramSection from "./Sections/InstagramSection.jsx"
import CalendarSection from './Sections/CalendarSection'

// Meta Tage
import MetaTags from "../meta"

const dashboardRoutes = []

const headerBrand = "Rutgers Out In Tech"
const landingPageSubTitle =
  "We invision a tech industry where LGBTQ+ people are empowered, well represented, and have full agency, from intern to CEO. Join us"

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <MetaTags />
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={headerBrand}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/rutgers-photo.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>
                  Uniting <span className={classes.rainbowText}>LGBTQ+</span> in
                  Tech @ Rutgers
                </h1>
                <h4>{landingPageSubTitle}</h4>
                <br />
                <FormDialog />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <AboutSection />
            <CalendarSection />
            {/* Todo: CSS, Investigate API rate limit */}
            {/* <InstagramSection /> */}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
