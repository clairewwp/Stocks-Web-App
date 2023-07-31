import React, { useState } from "react";
import "./AboutIt.css";
import Modal from "react-modal";
import { Container, Row } from "react-bootstrap";

Modal.setAppElement("#root");
export default function AboutIt() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="btn btn-light" onClick={() => setIsOpen(true)}>
        About
      </button>
      <Container>
        <Modal
          style={{
            overlay: { backgroundColor: "rgba(22, 22, 22,0.7)" },
            content: {
              backgroundColor: "rgb(22,22,40)",
              margin: "7%",
              borderColor: "white",
              borderRadius: "50%",
            },
          }}
          isOpen={isOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setIsOpen(false)}
        >
          <Row>
            <h2 className="h2">About The Stock Tracker</h2>
          </Row>
          <Row>
            <div className="text" id="text">
              <h3>Welcome to the Stock tracker Portal</h3>
              <br /> - You may click on "stocks" to view all the available stocks
              information.
         
              <br /> - Click on "Quote" to be redirected to the stocks page.
           
              <br /> - Choose "Price History" to view from the most recent 100
              days of information for a particular stock.{" "}
            </div>
          </Row>
          <Row>
            <div>
              <button
                className="btn btn-light"
                id="close"
                onClick={() => setIsOpen(false)}
              >
                close
              </button>
            </div>
          </Row>
        </Modal>
      </Container>
    </div>
  );
}
