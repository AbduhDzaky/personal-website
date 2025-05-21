import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <div>
              <h3></h3>
            </div>
            <div className="contact-card">
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <p className="label">Address</p>
                  <p className="info">Puri Taman Sari Blok K1 No.21</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <p className="label">Phone Number</p>
                  <p className="info">+6282158402425</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📧</span>
                <div>
                  <p className="label">E-mail</p>
                  <p className="info">abduhdzaky000@gmail.com</p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="menu d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="about">About</Link>
            <Link to="certificate">Certificate</Link>
            <Link to="project">Project</Link>
            <Link to="experience">Experience</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3 fs-6">
              Subscribe for Interesting Updates
            </h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">
                Subscribe
              </button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Abduh Dzaky</span>, All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
