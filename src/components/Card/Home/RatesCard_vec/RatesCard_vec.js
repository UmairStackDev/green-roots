import React from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import "./RatesCard_vec.css";

function RatesCard_vec() {
  return (
    <Row>
      <Col lg={4} md={6}>
        <div
          className="card_"
          data-aos="fade-right"
          data-aos-offset="1"
          data-aos-delay="50"
          data-aos-duration="1"
        >
          <div className="card_inner">
            <p className="card_name">Basic Designs</p>
            <p className="card_sf">Starts from</p>
            <div className="card_price">
              <h2>$7</h2> <span> /per design </span>
            </div>
          </div>
          <div className="card_inner">
            {/* <p className="card_txt">
              15,000 stitches <br /> MAX 4.75 X 4.75 INCH{" "}
            </p> */}
            <ListGroup as="ul" className="card_list">
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Turnaround: 02 To 04 Hours{" "}
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                1-2 Colors{" "}
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Minor Edits{" "}
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Simple Sillhouette Designs
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Source File{" "}
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Color  Seperation{" "}
              </ListGroupItem>
            </ListGroup>

            <a className="btnnn_inver" href="https://portal.mcsdigitizing.com/index.php/signup?_ga=2.105782342.493287104.1683318340-1732575329.1677849764&_gl=1*erkjhg*_ga*MTczMjU3NTMyOS4xNjc3ODQ5NzY0*_ga_DYZ87BMS7H*MTY4MzQwNDgzMi41NC4wLjE2ODM0MDQ4MzIuMC4wLjA." target="_blank">Get This Plan</a>
          </div>
        </div>
      </Col>
      <Col lg={4} md={6}>
        <div
          className="card_"
          data-aos="fade-up"
          data-aos-offset="1"
          data-aos-delay="1000"
          data-aos-duration="1"
        >
          <div className="card_inner">
            <p className="card_name">Average Designs</p>
            <p className="card_sf">Starts from</p>
            <div className="card_price">
              <h2>$15</h2> <span> /per design </span>
            </div>
          </div>
          <div className="card_inner">
            {/* <p className="card_txt card_txt_"> MAX 8 X 8 INCH</p> */}
            <ListGroup as="ul" className="card_list">
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Turnaround: 04 To 06 Hours{" "}
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Multi Color{" "}
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Minor Edits{" "}
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
               Detail Oriented
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Source File{" "}
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
               Color Seperation
              </ListGroupItem>
            </ListGroup>

            <a className="btnnn_inver" href="https://portal.mcsdigitizing.com/index.php/signup?_ga=2.105782342.493287104.1683318340-1732575329.1677849764&_gl=1*erkjhg*_ga*MTczMjU3NTMyOS4xNjc3ODQ5NzY0*_ga_DYZ87BMS7H*MTY4MzQwNDgzMi41NC4wLjE2ODM0MDQ4MzIuMC4wLjA." target="_blank">Get This Plan</a>
          </div>
        </div>
      </Col>
      <Col lg={4} md={6}>
        <div
          className="card_"
          data-aos="fade-left"
          data-aos-offset="1"
          data-aos-delay="500"
          data-aos-duration="1"
        >
          <div className="card_inner">
            <p className="card_name">Complex Designs</p>
            <p className="card_sf">Starts from</p>
            <div className="card_price">
              <h2>$30</h2> <span> /per design </span>
            </div>
          </div>
          <div className="card_inner">
            {/* <p className="card_txt card_txt_"> OVER 8 X 8 INCH</p> */}
            <ListGroup as="ul" className="card_list">
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Turnaround: 06 To 12 Hours{" "}
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
               Highly Defined, Detailed Art
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Minor Edits{" "}
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Tricky Color Requirement
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Source File{" "}
              </ListGroupItem>
              <ListGroupItem as="li">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Color Seperation
              </ListGroupItem>
            </ListGroup>

            <a className="btnnn_inver" href="https://portal.mcsdigitizing.com/index.php/signup?_ga=2.105782342.493287104.1683318340-1732575329.1677849764&_gl=1*erkjhg*_ga*MTczMjU3NTMyOS4xNjc3ODQ5NzY0*_ga_DYZ87BMS7H*MTY4MzQwNDgzMi41NC4wLjE2ODM0MDQ4MzIuMC4wLjA." target="_blank">Get This Plan</a>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default RatesCard_vec;
