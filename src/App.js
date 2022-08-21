import React, { useState } from "react";
import mosquito from "./assets/mosquito.png";
import { Modal, Button } from "react-bootstrap";
import "./App.css";
import Game from "./components/game";

function App() {
  const [showStartModal, setshowStartModal] = useState(true);
  const [startGame, setstartGame] = useState(false);
  const handleClose = () => {
    setshowStartModal(false);
    setstartGame(true);
  };

  const stopGame = () => {
    setstartGame(false);
  };
  return (
    <div>
      {showStartModal ? (
        <Modal
          show={showStartModal}
          onHide={() => {
            setshowStartModal(false);
          }}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>
              Hit me If You Can!!{" "}
              <img height="50em" src={mosquito} alt="mosquito" />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Hi, <br />
            Welcome to the Game! <br /> <br />
            Hit the Mosquito to kill it and score points.
            <br />
            The game ends in 30 seconds automatically.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Start Game
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Game startGame={startGame} stopGame={stopGame} />
      )}
    </div>
  );
}

export default App;
