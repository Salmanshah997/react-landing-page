/** @format */

import React from "react";
import Slider from "react-slick";
import {
  Col,
  Row,
  Container,
} from "react-bootstrap";
import { IMAGES } from "../../assets/images";
const Essentialservice = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const carousel = [
    {
      image: IMAGES.CHRIS,
      simg: IMAGES.QOUTE,
      heading:
        "When I first started out in the industry, options like Fullscript weren’t available! The convenience for patients is huge...They get reminders. It paves a path.",
      drname: "Dr. Jeffrey Bland, PhD – Founder of the Institute for Functional Medicine",
    },
    {
        image: IMAGES.MEGHAN,
        simg: IMAGES.QOUTE,
        heading:
          "The adherence program and tools Fullscript's developed are a significant step forward for improving patient engagement and influencing positive behavior change.",
        drname: "Dr. Meghan Walker, ND – Fullscript user since 2013",
      },
      {
        image: IMAGES.CHRIS,
        simg: IMAGES.QOUTE,
        heading:
          "The adherence program and tools Fullscript's developed are a significant step forward for improving patient engagement and influencing positive behavior change.",
        drname: "Dr. Chris Oswald, DC – Fullscript user since 2014",
      },
  ];
  return (
    <>
      <div className="carousel-cards py-5">
        <Slider {...settings}>
          {
            (carousel.
            map((item, index) => {
              return (
                <div className="py-4">
                  <Container>
                    <Row className="py-5">
                      <Col lg={4} className="align-self-center">
                        <div className="d-flex carousel-before position-relative">
                          <img
                            className="carousel-images"
                            src={item.image}
                         />
                        </div>
                      </Col>
                      <Col lg={8}>
                        <div className="">
                          <img className="py-3" src={item.simg}/>
                          <h2 className="text-white carousel-heading pl-3">
                            {item.heading}
                          </h2>
                          <p className="text-white pt-5">
                            {item.drname}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              );
            }))
          }
        </Slider>
      </div>
    </>
  );
};

export default Essentialservice;
