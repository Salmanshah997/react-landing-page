/** @format */

import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";
import "../../assets/style/salman.css";
import { IMAGES } from "../../assets/images";
const Highquality = () => {
  const highquality = [
    {
      suplimentname: "Supplements on Fullscript:",
      price: "High quality. Better prices.",
      heading:
        " Products in our catalog follow strict quality standards and practitioners decide what their patients pay.",
      practice: "Grow your practice. Make wellness more affordable.",
      explore: "Explore catalog",
      img: IMAGES.QUALITYSUP,
    },
  ];
  return (
    <section className="Highquality py-5">
      {highquality.map((item, index) => {
        return (
          <Row>
            <Col lg={6}>
              <div className="p-5">
                <h1 className="Integrative-color">{item.suplimentname}</h1>
                <h1 className="headings-color">{item.price}</h1>
                <p className="Thousands pt-4">{item.heading}</p>
                <h5 className="pt-2 pb-5 Grow-practice">{item.practice}</h5>
                <div className="d-flex pb-5">
                  <p className="Practitioner">{item.explore}</p>
                  <BsArrowRightShort className="arrow-icon mx-2" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="p-5">
                <img className="QUALITYSUP pt-4" src={item.img}></img>
              </div>
            </Col>
          </Row>
        );
      })}
    </section>
  );
};

export default Highquality;
