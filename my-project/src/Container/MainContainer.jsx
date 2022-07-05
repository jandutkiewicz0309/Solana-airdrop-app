import { createSignal } from "solid-js";
import Alert from "./../Components/ModalPopup/ModalPopup";
import { PublicKey, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import "./MainContainer.css";

function MainContainer() {
  const [adress, setAdress] = createSignal("");
  const [openModal, setOpenModal] = createSignal(false);
  const [amount, setAmount] = createSignal("");
  const [success, setSuccess] = createSignal(false);

  const Airdrop = async (adress, network) => {
    let connection;
    let isSolana;
    let pubkey;
    try {
      pubkey = new PublicKey(adress);
      isSolana = PublicKey.isOnCurve(pubkey.toBuffer());
    } catch (error) {
      console.log(error);
      setOpenModal(true);
      return;
    }
    switch (network) {
      case "devnet":
        connection = new Connection("https://api.devnet.solana.com");
      case "testnet":
        connection = new Connection("https://api.testnet.solana.com");
    }
    let txhash = await connection.requestAirdrop(
      pubkey,
      parseFloat(amount()) * LAMPORTS_PER_SOL
    );
    try {
      let txhash = await connection.requestAirdrop(
        pubkey,
        parseFloat(amount()) * LAMPORTS_PER_SOL
      );
      console.log(txhash);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div class="root">
      <div class="Main">
        <Alert open={openModal()} onClose={handleClose} />
        <h1 class="PageHeader">Solana Airdrop</h1>
        <input
          type="text"
          class="WalletInput"
          placeholder="Type wallet's address"
          onInput={(e) => setAdress(e.target.value)}
        ></input>
        {success() ? <p class="SuccessfulSending">Success</p> : null}
        <div class="TextHeader">
          <p class="nameAirdrop">Airdrop</p>
          <input
            type="number"
            class="SOLInput"
            onInput={(e) => setAmount(e.target.value)}
          ></input>
          <p class="NameToken">SOL</p>
        </div>
        <div class="MainButtons">
          <button
            class="TestNetButton"
            onClick={() => Airdrop(adress(), "testnet")}
          >
            TestNet
          </button>
          <button
            class="DevNetButton"
            onClick={() => Airdrop(adress(), "devnet")}
          >
            DevNet
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
