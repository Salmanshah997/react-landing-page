/** @format */

import React from "react";
import {
  Col,
  Row,
  Card,
} from "react-bootstrap";

import { BsArrowRightShort } from "react-icons/bs";
import { IMAGES } from "../../assets/images";
import "../../assets/style/salman.css";
const Simplify = () => {
  const threecard = [
    {
      id: 0,
      background: "#FF6263",
      heading: "Personalized care",
      paragraph:
        "Custom protocols and features to personalize any treatment plan.",
      imge: IMAGES.PERSONALIZE,
    },

    {
      id: 1,
      background: `#FF9373`,
      heading: "Treatment adherence",
      paragraph:
        " Tools, education, and reminders to help support behavior change.",
      imge: IMAGES.TREATMENT,
    },

    {
      id: 2,
      heading: "Supplement support",
      paragraph:
        "World-class wellness products with virtual dispensing or wholesale ordering.",
      imge: IMAGES.SUPLIMENTSPORT,
    },
  ];
  return (
    <>
      <section className="section-one py-5 px-5">
        <Row>
          <Col lg={12} sm={12} xl={6}>
            <h4 className="Full-script">Fullscript-</h4>
            <h1 className="Full-script Simplify">
              Simplify the path to lifelong wellness
            </h1>
            <p className="patients-thrive pt-4">
              Help your patients thrive with a platform for personalized
              treatment planning, ongoing wellness support and education, and
              healthcare’s best supplements.
            </p>
            <div className="d-flex py-4">
              <p className="Practitioner">Practitioner software</p>
              <span>
                <BsArrowRightShort className="arrow-icon mx-2" />
              </span>
            </div>
            <div className="d-flex pb-5">
              <p className="Practitioner">Patient acount </p>
              <BsArrowRightShort className="arrow-icon mx-2" />
            </div>
          </Col>

          {/* <Col md={6}>
            <div className="images-animation">
              <Row>
                <Col md={6}>
                  <Card className="all-card-color design-card1">
                    <div className="d-flex justify-content-center ">
                      <Card.Img
                        variant="center"
                        className="py-3 pr-2"
                        src={IMAGES.SUPLIMENT}
                      />
                      <p className="py-3 px-3 set-cards-text">
                        Autoship <br></br> activated!
                      </p>
                    </div>
                  </Card>
                <div className="d">
                <Card className="all-card-color design-card4">
                    <div className="d-grid justify-content-center">
                      <Card.Img
                        variant="center"
                        className="py-3 pr-2 dr-helis"
                        src={IMAGES.EMAILICON}
                      />
                    </div>
                    <p className="px-3 set-cards-text">
                      Wellness<br></br> education
                    </p>
                  </Card>
                </div>
                
                </Col>
                <Col md={6}>
                  <Card className="all-card-color design-card2">
                    <div className="d-grid justify-content-center">
                      <Card.Img
                        variant="center"
                        className="py-3 pr-2 dr-helis"
                        src={IMAGES.DRHELIS}
                      />
                    </div>
                    <p className="px-3 set-cards-text">
                      Dr. Helias shared a <br></br> treatment plan with you.
                    </p>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Card className="all-card-color design-card3">
                    <div className="d-flex justify-content-center ">
                      <Card.Img
                        variant="center"
                        className="py-3 pr-2"
                        src={IMAGES.SHIPPING}
                      />
                      <p className="py-3 px-3 set-cards-text">
                        Your supplements <br></br> are on their way!
                      </p>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col> */}

          <Col md={6} className="hide-animate">
            <div className="images-animation2">
              <Row>
                <Col md={6}>
                  <div className="d">
                    <Card className="all-card-color design-card4">
                      <div className="d-grid justify-content-center">
                        <Card.Img
                          variant="center"
                          className="py-3 pr-2 dr-helis"
                          src={IMAGES.EMAILICON}
                        />
                      </div>
                      <p className="px-3 set-cards-text text-center">
                        Wellness education
                      </p>
                    </Card>
                  </div>
                </Col>
                <Col md={6}>
                  <Card className="all-card-color design-card5">
                    <div className="d-flex justify-content-center ">
                      <Card.Img
                        variant="center"
                        className="py-3 pr-2"
                        src={IMAGES.NOTIFICATION}
                      />
                      <p className="py-3 px-3 set-cards-text align-self-center mb-0">
                        Refill reminder
                      </p>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Card className="all-card-color design-card6">
                    <div className="d-grid justify-content-center">
                      <Card.Img
                        variant="center"
                        className="py-3 pr-2 dr-helis"
                        src={IMAGES.DRCORTES}
                      />
                    </div>
                    <p className="px-3 set-cards-text text-center">
                      Dr.Cortes sent<br></br> product recommendation.
                    </p>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </section>

      <section className="p-5">
        <Row>
          <Col>
            <h2 className="Integrative-color">
              Integrative care + active support
            </h2>
            <h2 className="headings-color">= healthier outcomes that last</h2>
            <p className="py-3 Thousands">
              Thousands of practitioners use Fullscript to simplify their
              workflow,<br></br> grow their practice, and yield better patient
              outcomes.
            </p>
          </Col>
        </Row>
        <Row className="py-5">
          {threecard.map((item, index) => {
            return (
              <Col lg={4} key={index}>
                <Card
                  //   style={{ background: item.background }}
                  className={`Personalized-card pt-4 pb-0 ${
                    item.id === 0
                      ? "Personalized-card"
                      : item.id === 1
                      ? "Personalized-card1"
                      : item.id === 2
                      ? "Personalized-card2"
                      : ""
                  }`}
                >
                  <Card.Body>
                    <Card.Title className="treat-card">
                      {item.heading}
                    </Card.Title>
                    <Card.Text className="Thousands">
                      {item.paragraph}
                    </Card.Text>
                    <Card.Img className="px-4" variant="top" src={item.imge} />
                  </Card.Body>
                </Card>
              </Col>
            );
          })}

          {/* <Col lg={4}>
            <Card className="Treatment-card pt-4 pb-0">
              <Card.Body>
                <Card.Title className="treat-card">Treatment adherence</Card.Title>
                <Card.Text className="Thousands">
                  Tools, education, and reminders to help support behavior
                  change.
                </Card.Text>
                <Card.Img
                  className="px-4"
                  variant="top"
                  src={IMAGES.PERSONALIZE}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="Supplement-card pt-4 pb-0">
              <Card.Body>
                <Card.Title className="treat-card">Supplement support</Card.Title>
                <Card.Text className="Thousands">
                  World-class wellness products with virtual dispensing or
                  wholesale ordering.
                </Card.Text>
                <Card.Img
                  className="px-4"
                  variant="top"
                  src={IMAGES.PERSONALIZE}
                />
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </section>
    </>
  );
};

export default Simplify;
