import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import AboutImage from "../assets/img/about.png";
import FigmaImage from "../assets/img/Figma.png";
import CanvaImage from "../assets/img/canva.png";
import WordImage from "../assets/img/word.png";

// import { Swiper, SwiperSlide } from "swiper/react";

import HtmlImage from "../assets/img/program/html.png";
import CssImage from "../assets/img/program/css.png";
import JsImage from "../assets/img/program/js.png";
import JavaImage from "../assets/img/program/java.png";
import PythonImage from "../assets/img/program/python.png";

// import { Pagination } from "swiper/modules";

import Fake1 from "../assets/img/fk-project/fake-project-1.jpg";
import Fake2 from "../assets/img/fk-project/fake-project-2.jpg";
import Fake3 from "../assets/img/fk-project/fake-project-3.jpg";
import { kelasTerbaru /*dataSwiper*/ } from "../data/index";

import "swiper/css";
import "swiper/css/pagination";

const HomePage = () => {
  return (
    <div className="homepage" id="home">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="4" className="kolom-1">
              <h1 className="mb-0 mt-0 animate__animated animate__fadeInUp animate__delay-1s">
                Blockchain Developer
              </h1>
            </Col>

            <Col lg="4" className="kolom-2">
              <p className="mb-1 mt-0 animate__animated animate__fadeInUp animate__delay-1s">
                I am a undergraduate student👋
              </p>
              <h1 className="mb-0 mt-0 animate__animated animate__fadeInUp animate__delay-1s">
                Full-stack Developer
              </h1>

              <div className="kontainer">
                <img
                  src={HeroImage}
                  alt="hero-img"
                  className="animate__animated animate__fadeInUp pt-0 pt-lg-0 mt-4"
                />

                <div className="button-container">
                  <button className="overlay-button btn-1 btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                    Project
                  </button>
                  <button className="overlay-button transparent-button btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                    Certificate
                  </button>
                </div>
              </div>

              <p className="pt-0 animate__animated animate__fadeInUp animate__delay-1s">
                Based in Makassar, Indonesia
              </p>
            </Col>

            <Col lg="4" className="kolom-3  ">
              <h1 className="mb-4 mt-0 animate__animated animate__fadeInUp animate__delay-1s">
                Web3 Interested
              </h1>
            </Col>
          </Row>
        </Container>
      </header>

      <div className="about w-100 min-vh-100" id="about">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center pt-5 pb-5">About Me</h1>
            </Col>
          </Row>

          <Row className=" w-100 min-vh-100 ">
            <Col data-aos="fade-up" data-aos-duration="1000">
              <img
                src={AboutImage}
                alt="about-img"
                className="animate__animated animate__fadeInUp animate__delay-1s pt-0 pt-lg-0 mt-4"
              />
            </Col>
            <Col data-aos="fade-up" data-aos-duration="1000">
              <div className="about-1 animate__animated animate__fadeInUp animate__delay-1s">
                <h3 className=" fw-bold">Hello!!</h3>
                <h5 className="">My name is A. Muh. Abduh Dzaky</h5>
                <p>
                  Welcome to my portfolio. I am an Information Systems student
                  with a strong interest in technology, particularly in becoming
                  a Front-end Developer.
                </p>
              </div>

              <div className="about-2 animate__animated animate__fadeInUp animate__delay-1s">
                <h3 className="fw-bold pt-5 text-center">Skill</h3>
                <img src={FigmaImage} alt="figma-img" />
                <img src={CanvaImage} alt="canva-img" />
                <img src={WordImage} alt="word-img" />
              </div>

              <div className="about-3 animate__animated animate__fadeInUp animate__delay-1s">
                <img src={HtmlImage} alt="html-img" />
                <img src={CssImage} alt="css-img" />
                <img src={JsImage} alt="js-img" />
                <img src={JavaImage} alt="java-img" />
                <img src={PythonImage} alt="python-img" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>

      <div className="certificate w-100 min-vh-100" id="certificate">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Certificate</h1>
              <p className="text-center">
                Here are some certificates I have achieved
              </p>
            </Col>
          </Row>

          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col
                  key={kelas.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000 "
                  data-aos-delay={kelas.delay}
                >
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="mb-5 rounded-top "
                  />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button className="btn btn-danger rounded-1">
                      {kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <div className="project w-100 min-vh-100" id="project">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold pt-5">My Project</h1>
              <p className="text-center pb-5">
                Here are some projects I have worked on
              </p>
            </Col>
          </Row>

          <Row>
            <Col data-aos="fade-up">
              <div className="project-1">
                <img src={Fake1} alt="fake1-img" />
              </div>
            </Col>

            <Col data-aos="fade-up">
              <div className="project-2">
                <img src={Fake2} alt="fake2-img" />
              </div>
            </Col>

            <Col data-aos="fade-up">
              <div className="project-3">
                <img src={Fake3} alt="fake3-img" />
              </div>
            </Col>
          </Row>
        </Container>

        {/* <div className="activity py-5" id="activity">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center fw-bold my-5 pt-5">My Activity</h1>
              </Col>
            </Row>

            <Row>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {dataSwiper.map((data) => {
                  return (
                    <SwiperSlide key={data.id} className="shadow-sm">
                      <p className="desc">{data.desc}</p>
                      <div className="people">
                        <img src={data.image} alt="" />
                        <div>
                          <h5 className="mb-1 ">{data.name}</h5>
                          <p className="m-0 fw-bold">{data.skill}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Row>
          </Container>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
