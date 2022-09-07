/** @format */

import React from "react";
import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

import {
  Col,
  Row,
} from "react-bootstrap";
import { IMAGES } from "../../assets/images";
const Footer = () => {
  return (
    <section className="footer px-5 py-5">
      <Row className="px-3">
        <Col lg={6}>
          <div className="pb-3">
            <img className="footer-Logo pt-5" src={IMAGES.WHITELOGO}></img>
          </div>
          <h4 className="text-white">
            We're certified carbon-neutral. It's part of our commitment to
            helping people get better.
          </h4>
          <div className="d-flex mt-4 justify-content-start">
            <BsInstagram className="icon-bundle mx-3" />
            <BsFacebook className="icon-bundle mx-3" />
            <BsYoutube className="icon-bundle mx-3" />
            <BsLinkedin className="icon-bundle mx-3" />
            <BsPinterest className="icon-bundle mx-3" />
            <AiFillTwitterCircle className="icon-bundle mx-3" />
          </div>
        </Col>
        <Col lg={6} className="d-flex pt-5">
          <div className="ideal-footer">
            <h4>PRODUCT</h4>
            <ul>
              <li>Practitioner software</li>
              <li>Integrations</li>
              <li>Pricing</li>
              <li>Patients</li>
              <li>Supplement quality</li>
              <li>Treatment adherence</li>
              <li>Catalog</li>
              <li>Wholesale</li>
            </ul>
          </div>

          <div className="ideal-footer">
            <h4>COMPANY</h4>
            <ul>
              <li>Spotlight</li>
              <li>About Fullscript</li>
              <li>Collective</li>
              <li>Leadership</li>
              <li>Culture guide</li>
              <li>Careers</li>
              <li>Engineering</li>
              <li>News</li>
            </ul>
          </div>
          <div className="ideal-footer">
            <h4>SUPPORT</h4>
            <ul>
              <li>Practitioner support</li>
              <li>Practitioner support</li>
              <li>Patient help</li>
              <li>Testimonials</li>
              <li>General FAQ</li>
              <li>Patient shipping</li>
              <li>Wholesale shipping</li>
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Footer;
