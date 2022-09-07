/** @format */

import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import {
  Form,
  Button,
  NavDropdown,
  Navbar,
  Nav,
  Col,
  Row,
  Card,
  Container,
  FormControl,
} from "react-bootstrap";
import { IMAGES } from "../../assets/images";
const Practitioners = () => {
  const practitioners = [
    {
      img: IMAGES.PRICING,
      patientaccount: "Practitioner accounts",
      outcomes: "Get better outcomes and grow your practice.",
      createacc: "Create an account",
      button: "Learn more",
    },
    {
      img: IMAGES.HOMEPRICING,
      patientaccount: "Patient accounts",
      outcomes: "Practice wellness anywhere, anytime.",
      createacc: "Get started",
      button: "Learn more",
    },
  ];
  return (
    <section className="Practitioners py-5">
      <>
        <Row className="pt-5">
          <Col lg={12}>
            <h1 className="text-center month-detail pt-5">$0/month</h1>
          </Col>
          <Col lg={12}>
            <div className="">
              <h1 className="text-center text-white">
                for patients and practitioners
              </h1>
              <p className="text-center platform-built text-white pt-3">
                Try a platform built to help people get better and better.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mx-5 py-5">
          {practitioners.map((item, index) => {
            return (
              <Col lg={6}>
                <Card className="m-5 man-image-card">
                  <Card.Img className="p-4" variant="top" src={item.img} />
                  <Card.Body className="p-4">
                    <Card.Title className="treat-card">
                      {item.patientaccount}
                    </Card.Title>
                    <Card.Text className="Grow-practice">
                      {item.outcomes}
                    </Card.Text>
                    <div className="d-flex">
                      <Button className="cards-button">{item.createacc}</Button>
                      <div className="d-flex px-4 pt-3">
                        <p className="Practitioner">{item.button}</p>
                        <BsArrowRightShort className="arrow-icon mx-2" />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    </section>
  );
};

export default Practitioners;
