/** @format */

import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { FaHands } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { IMAGES } from "../../assets/images";
const Education = () => {
  const data = [
    {
      icon: <BiMessage className="message-icon" />,
      treat: "We deliver real support",
      text1: "We equip practitioners and patients with world-class software,",
      text2: "resources, and customer support to get better and stay better.",
    },

    {
      icon: <IoIosPeople className="message-icon" />,
      treat: "We empower people",
      text1:
        "There’s no one-size-fits-all approach to health and wellness. We’re",
      text2: "dedicated to making them both more personalized than ever.",
    },

    {
      icon: <FaHands className="message-icon" />,
      treat: "We believe in partnerships",
      text1:
        "Wellness is a journey best navigated between practitioner and patient",
      text2: "— one we make seamless with our powerful platform.",
    },
  ];
  return (
    <section className="py-5 px-5">
      <Row className="px-3 py-5">
        <Col lg={6}>
          <h1 className="Integrative-color">
            Education to support adherence and supplements
          </h1>
          <div>
            <h4 className="pt-3 treat-card">Practitioner resources</h4>
            <p className="Thousands">
              Download infographics, handouts, whitepapers and more to help
              support you and your patients.
            </p>
            <div className="d-flex pb-2">
              <p className="Practitioner">Get resources</p>
              <BsArrowRightShort className="arrow-icon mx-2" />
            </div>
          </div>

          <div>
            <h4 className="pt-3 treat-card">Wellness blog</h4>
            <p className="Thousands">
              Explore our award-winning blog to find hundreds of wellness topics
              for patients and practitioners.
            </p>
            <div className="d-flex pb-5">
              <p className="Practitioner">Get reading</p>
              <BsArrowRightShort className="arrow-icon mx-2" />
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="d-flex justify-content-end">
            <img className="Coffee-image" src={IMAGES.KNOWLEDGE}></img>
          </div>
        </Col>
      </Row>
      <Row className="py-5">
        <Col lg={12}>
          <h1 className="pt-4 text-center Integrative-color">
            Fullscript's commitment to wellness
          </h1>
        </Col>
        {data.map((item, index) => {
          return (
            <Col lg={12}>
              <div className="d-flex justify-content-center p-5">
                <div className="message">{item.icon}</div>
                <div className="px-4">
                  <h3 className="treat-card"> {item.treat}</h3>
                  <p className="Thousands">
                    {item.text1} <br></br> {item.text2}
                  </p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};
export default Education;
