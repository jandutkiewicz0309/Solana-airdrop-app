import "./ModalPopup.css";

function Alert(props) {
  return (
    <>
      {props.open ? (
        <div class="modal">
          <div class="overlay"></div>
          <div class="modal-content">
            <h2 class="adress-alert">Wrong Adress Wallet</h2>
            <p class="text-alert">You must provide a good wallet address</p>
            <button class="close-modal" onClick={props.onClose}>
              CLOSE
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Alert;
