import React from "react"
import Button from "components/CustomButtons/Button.jsx"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

import formDialogStyles from "assets/jss/material-kit-react/components/formDialogStyles.jsx"

// React icons
import { GrMail } from "react-icons/gr"
import { withStyles } from "@material-ui/core"

class FormDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  setOpen = newVal => {
    this.setState({
      open: newVal,
    })
  }

  handleClickOpen = () => {
    this.setOpen(true)
  }

  handleClose = () => {
    this.setOpen(false)
  }

  render() {
    const { classes } = this.props
    const { handleClickOpen, handleClose } = this
    const { open } = this.state
    return (
      <div>
        <Button
          color="danger"
          size="lg"
          rel="noopener noreferrer"
          onClick={handleClickOpen}
        >
          <GrMail />
          Join our Mailing List
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Subscribing to our newsletter
            <DialogContent>
              <DialogContentText>
                To join please subscribe to our newletter! We will send you
                occasional emails with updates and events.
              </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                type="submit"
                color="danger"
                href="https://tech.us4.list-manage.com/subscribe/post?u=1061e8fe9c358461cd41fc4ac&amp;id=92248d4151"
                target="_blank"
              >
                Subscribe
              </Button>
            </DialogActions>
          </DialogTitle>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(formDialogStyles)(FormDialog)
