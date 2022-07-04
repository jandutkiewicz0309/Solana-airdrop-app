import { createSignal } from 'solid-js';
import {PublicKey} from '@solana/web3.js';
import "./MainContainer.css"

function appSolana() {

  const [adress, setAdress] = createSignal("")
  const setSolanaAdress = (adress1) => {
    setAdress(adress1)
    console.log(adress())
  }

  function Buttons() {
    const Airdrop = (address, network) => {
      let isSolana
      console.log(address)
      try {
          const pubkey = new PublicKey(address)
            isSolana =  PublicKey.isOnCurve(pubkey.toBuffer())
      } catch (error) {

      }
      if(!isSolana)
      switch(network) {
          case "DevNet":
              
      }
  }
  }
  function Alert() {
    const [modal, setModal] = createSignal(false);
  
    const toggleModal = () => {
      setModal(!modal());
    };


  return (
    <>
       <div class="Main">
      <h1>Solana Airdrop</h1>
      <input type="text" class="WalletInput" placeholder="Type wallet's address" onInput={(e) => (setAdress(e.target.value))}></input>
      <div class="Text">
        <p>Airdrop</p>
        <input type="number" class="SOLInput" placeholder="choose quantity"></input>
        <p>SOL</p>
      </div>
    </div>
    <div class="MainButtons">
            <div class="HeaderButton">
            <button onClick={() => setTest(props.solanaAdress)} >TestNet</button>
            <button >DevNet</button>
            </div>
        </div>
        {modal() ? (
          <div class="modal">
            <div onClick={toggleModal} class="overlay"></div>
            <div class="modal-content">
              <h2>Wrong Adress Wallet</h2>
              <p>
              You must provide a good wallet address
              </p>
              <button class="close-modal" onClick={toggleModal}>CLOSE</button>
            </div>
          </div>
        ):null}
    </>
    
  );
}
}
export default appSolana;