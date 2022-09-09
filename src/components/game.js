import React, { useState, useEffect } from "react";
import mosquito from "./../assets/mosquito.png";
import mosquitoScared from "./../assets/mosquito-dead.png";
import blood from "./../assets/blood splash.png";
import { Button, Modal } from "react-bootstrap";

function Game() {
  //   relaunch modal
  const [showCloseModal, setshowCloseModal] = useState(false);

  //   showScared mosquito
  const [showHit, setshowHit] = useState(false);

  //   position of mosquito
  const [top, settop] = useState(Math.floor(Math.random() * 400));
  const [left, setleft] = useState(Math.floor(Math.random() * 400));

  //   score
  const [count, setcount] = useState(0);

  // useEffect as ComponentDidMount
  useEffect(() => {
    startGame();
  }, []);

  //   game logic
  const startGame = () => {
    let time = setInterval(() => {
      let topValue = Math.floor(Math.random() * 400);
      let leftValue = Math.floor(Math.random() * 400);
      settop(topValue);
      setleft(leftValue);
      setshowHit(false);
    }, 1000);

    setTimeout(() => {
      clearTimeout(time);
      setshowCloseModal(true);
    }, 30000);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="App">
      <div className="score">Score : {count}</div>
      <div className="App-header">
        {showHit ? (
          // rendering killed/scared mosquito
          <div>
            <img
              src={blood}
              className="mosquito"
              style={{
                position: "absolute",
                top: `${top}px`,
                left: `${left}px`,
              }}
              alt="mosquito"
            />
            <img
              src={mosquitoScared}
              className="mosquito"
              style={{
                position: "absolute",
                top: `${top}px`,
                left: `${left}px`,
              }}
              alt="mosquito"
            />
          </div>
        ) : (
          // rendering normal mosquito
          <img
            onClick={() => {
              setcount(count + 1);
              setshowHit(true);
            }}
            src={mosquito}
            className="mosquito"
            style={{
              position: "absolute",
              top: `${top}px`,
              left: `${left}px`,
            }}
            alt="mosquito"
          />
        )}
        {/* Close Modal */}
        <div>
          <Modal
            show={showCloseModal}
            backdrop="static"
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title>
                Game Over!! <img height="50em" src={mosquito} alt="mosquito" />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>Your Score: {count}</Modal.Body>
            <Modal.Footer>
              <Button variant="warning" onClick={refreshPage}>
                relaunch
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Game;
