import "./AlertModal.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertModal = ({ open, close }) => {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Message!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Since this is not a real store, the registration process is done in
            a simulated way. This message indicates that your registration
            process was successful, but you cannot use this username to log in.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Forward to login</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertModal;
