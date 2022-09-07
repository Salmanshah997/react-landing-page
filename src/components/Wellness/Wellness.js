/** @format */

import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Button, Col, Row, Container } from "react-bootstrap";
import { IMAGES } from "../../assets/images";
const Wellness = () => {
  return (
    <section className="pt-5">
      <Container>
        <Row>
          <Col>
            <div className="pt-5">
              <h1 className="text-center Integrative-color pt-3">
                Wellness isn’t easy, but it can be simpler
              </h1>
              <p className="text-center Thousands py-4">
                Improve outcomes and grow your practice on Fullscript for
                $0/month.
              </p>
              <div className="d-flex justify-content-center">
                <Button className="cards-button px-3 py-2">
                  Create an account
                  <BsArrowRightShort className="account-btn" />
                </Button>
              </div>
              <img
                className="d-flex pt-5 m-auto"
                src={IMAGES.PLANTCIRCLE}
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Wellness;
