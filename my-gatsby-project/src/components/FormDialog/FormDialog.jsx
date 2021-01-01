import React, { useState } from "react"
import Button from "components/CustomButtons/Button.jsx"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

import { makeStyles } from '@material-ui/styles';

// React icons
import { GrMail } from "react-icons/gr"

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  dialogActions: {
    padding: "0 24px 24px",
    margin: 0,
    float: "left",
  },
});

export default function FormDialog() {
  const [open, setOpen] = useState(false)

  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
        </DialogTitle>
        <form
          action="https://tech.us4.list-manage.com/subscribe/post?u=1061e8fe9c358461cd41fc4ac&amp;id=92248d4151"
          method="post"
        >
          <DialogContent>
            <DialogContentText>
              To join please subscribe to our newletter! We will send you
              occasional emails with updates and events.
            </DialogContentText>
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Button onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleClose} type="submit" color="danger">
              Subscribe
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}
