import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import RootContext from "../../context";
import DisplayProductInCart from "../molecules/DisplayProductInCart";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#391f49",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "60vw",
    height: "80vh",
    outline: "none",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    overflow: "auto",
    gap: "10px",
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
          <h2>Shopping Cart</h2>
          <p>Total Price: 0000 PLN</p>

          <DisplayProductInCart />
        </div>
      </Fade>
    </Modal>
  );
};

export default Cart;
