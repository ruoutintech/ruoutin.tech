import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons
import Chat from "@material-ui/icons/Chat"
import VerifiedUser from "@material-ui/icons/VerifiedUser"
import Fingerprint from "@material-ui/icons/Fingerprint"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import InfoArea from "components/InfoArea/InfoArea.jsx"

// React icons
import { BsFillPeopleFill } from "react-icons/bs"
import { MdEventAvailable } from "react-icons/md"
import { FaHandsHelping } from "react-icons/fa"

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx"

class AboutSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk outreach</h2>
            <h5 className={classes.description}>
              Out in Tech is the world’s largest non-profit community of LGBTQ+
              tech leaders. <br />
              We create opportunities for our 40,000 members to advance their
              careers, grow their networks, and leverage tech for social change.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="40,000 Members"
                description="Our parent organization has already ammassed a respectable network of highly educated, driven, and helping individuals. We have alumni in various industries, companies, and countries"
                icon={BsFillPeopleFill}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="500 Events"
                description="We regularly hosts various events, from fire-side chats, resume reviews, to game nights. Out In Tech also sponsors events that our members have access to"
                icon={MdEventAvailable}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="5,000 Hours Volunteered"
                description="Make an impact! We partner with LGBTQ+ organizations on and off campus to provide our support and skills to lift up our community"
                icon={FaHandsHelping}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(productStyle)(AboutSection)
