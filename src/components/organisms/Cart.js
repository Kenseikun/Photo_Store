import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import RootContext from "../../context";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "60vw",
    height: "80vh",
    outline: "none",
    borderRadius: "20px",
  },
  cartBtn: {
    color: "yellow",
    backgroundColor: "black",
  },
}));

const Cart = () => {
  const classes = useStyles();

  const context = useContext(RootContext);
  const { isCartOpen, handleCartClose } = context;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isCartOpen}
      onClose={handleCartClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isCartOpen}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Transition modal</h2>
          <p id="transition-modal-description">
            react-transition-group animates me.
          </p>
        </div>
      </Fade>
    </Modal>
  );
};

export default Cart;
