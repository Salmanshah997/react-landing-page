/** @format */

import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";
import "../../assets/style/salman.css";
import { IMAGES } from "../../assets/images";
const Plus = () => {
  const images = [
    {
      images: IMAGES.DRCHORONO,
    },
    {
      images: IMAGES.JANELOGO,
    },
    {
      images: IMAGES.HEALTHLINE,
    },
    {
      images: IMAGES.BETTERLOGO,
    },
    {
      images: IMAGES.CERBOLOGO,
    },
    {
      images: IMAGES.POWERPRACTICE,
    },
  ];
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col>
            <div className="pt-5 pb-2">
              <h1 className="text-center Integrative-color">
                Plus, Fullscript in your EHR
              </h1>
              <p className="text-center py-4 Thousands">
                Fullscript integrates with leading EHRs so you can recommend
                <br></br>
                supplements in your existing workflow.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="px-0">
          {images.map((item, index) => {
            return (
              <Col lg={2}>
                <div>
                  <img className="bundle-images" src={item.images}></img>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col className="py-4">
            <div className="d-flex py-5 justify-content-center">
              <p className="Practitioner">See all our integrations partners</p>
              <BsArrowRightShort className="arrow-icon mx-2 " />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Plus;
