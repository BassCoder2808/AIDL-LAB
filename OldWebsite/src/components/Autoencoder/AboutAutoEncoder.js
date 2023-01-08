import React, { Component } from "react";
//import Content from './ContentComponent';
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "reactstrap";
import { withRouter } from "react-router";
import imag from "./aboutAutoEncoder.png";
class AboutAutoEncoder extends Component {
  goToSimulation = () => {
    this.props.history.push("/simulation-autoencoder");
  };

  goToTest = () => {
    this.props.history.push("/test-autoencoder");
  };

  render() {
    window.scrollTo(0, 0);
    let selectedExpId = localStorage.getItem("selectedExp");

    return (
      <div className="App">
        <body id="page-top">
          <section class="page-section portfolio" id="portfolio">
            <div class="container">
              <br />
              <h2 class="page-section-heading text-center text-uppercase  mb-0">
                About the course
              </h2>

              <br />
              <br />

              <div class="row">
                <div class="col-md-6 col-lg-4 mb-5">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    class="portfolio-item mx-auto"
                    data-toggle="modal"
                    data-target="#portfolioModal1"
                  >
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div class="portfolio-item-caption-content text-center text-white">
                        <i class="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      class="img-fluid"
                      src="assets/img/portfolio/aim.png"
                      alt=""
                    />
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-5">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    class="portfolio-item mx-auto"
                    data-toggle="modal"
                    data-target="#portfolioModal2"
                  >
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div class="portfolio-item-caption-content text-center text-white">
                        <i class="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      class="img-fluid"
                      src="assets/img/portfolio/prereq.png"
                      alt=""
                    />
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-5">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    class="portfolio-item mx-auto"
                    data-toggle="modal"
                    data-target="#portfolioModal3"
                  >
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                      <div class="portfolio-item-caption-content text-center text-white">
                        <i class="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      class="img-fluid"
                      src="assets/img/portfolio/outcome.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="copyright py-4 text-center text-white">
            <div class="container">
              <small>Copyright © SPIT 2020</small>
            </div>
          </section>

          <div class="scroll-to-top d-lg-none position-fixed">
            <a
              class="js-scroll-trigger d-block text-center text-white rounded"
              href="#page-top"
            >
              <i class="fa fa-chevron-up"></i>
            </a>
          </div>

          <div
            class="portfolio-modal modal fade"
            id="portfolioModal1"
            tabindex="-1"
            role="dialog"
            aria-labelledby="portfolioModal1Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl" role="document">
              <div class="modal-content">
                <button
                  class="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i class="fas fa-times"></i>
                  </span>
                </button>
                <div class="modal-body text-center">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-lg-8">
                        <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
                          Aim
                        </h2>

                        <br />

                        <p class="mb-5">
                          <ul>
                            <li>
                              Demonstrate and Understand the working of Random
                              Forest with the help of a real life example.
                            </li>
                          </ul>
                        </p>
                        <button
                          class="btn btn-primary"
                          href="#"
                          data-dismiss="modal"
                        >
                          <i class="fas fa-times fa-fw"></i>Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="portfolio-modal modal fade"
            id="portfolioModal2"
            tabindex="-1"
            role="dialog"
            aria-labelledby="portfolioModal2Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl" role="document">
              <div class="modal-content">
                <button
                  class="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i class="fas fa-times"></i>
                  </span>
                </button>
                <div class="modal-body text-center">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-lg-8">
                        <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
                          Pre- requisites
                        </h2>

                        <br />

                        <ul>
                          <li>Well acquainted with python</li>
                          <li>Basic understanding of Vectors</li>
                        </ul>
                        <button
                          class="btn btn-primary"
                          href="#"
                          data-dismiss="modal"
                        >
                          <i class="fas fa-times fa-fw"></i>Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="portfolio-modal modal fade"
            id="portfolioModal3"
            tabindex="-1"
            role="dialog"
            aria-labelledby="portfolioModal3Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl" role="document">
              <div class="modal-content">
                <button
                  class="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i class="fas fa-times"></i>
                  </span>
                </button>
                <div class="modal-body text-center">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-lg-8">
                        <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
                          Learning Outcomes
                        </h2>

                        <br />

                        <ul>
                          <li>
                            Able to apply Random Forest in the application.{" "}
                          </li>
                          <li>Understanding of the Random Forest Concept.</li>
                        </ul>
                        <button
                          class="btn btn-primary"
                          href="#"
                          data-dismiss="modal"
                        >
                          <i class="fas fa-times fa-fw"></i>Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 class="page-section-heading text-center text-uppercase  mb-0">
              Course Content
            </h2>
          </div>
          <Container fluid="lg">
            <div>
              <h2 style={{ textAlign: "center" }}>
                <span style={{ fontSize: "36pt" }}>
                  <strong>
                    <span style={{ fontFamily: "Arial", color: "#000000" }}>
                      Auto Encoders
                    </span>
                  </strong>
                </span>
              </h2>
              <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                <span
                  style={{
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  An autoencoder is a type of deep learning algorithm which is
                  made to take in information and change it into a different
                  representation. They are crucial in the creation of images. In
                  the area of unsupervised machine learning, autoencoders are
                  highly helpful. They can be used to lower the dimensions of
                  the data and compress it.
                </span>
              </p>
              <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>&nbsp;</p>
              <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                <span
                  style={{
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  Autoencoders and Principle Component Analysis (PCA) vary
                  primarily from each other in regards that while PCA identifies
                  the directions along which data can be projected with the
                  least amount of variation, Autoencoders rebuild our original
                  input from a compressed version of it. This can be understood
                  from the diagram below.
                </span>
              </p>
              <p>&nbsp;</p>
              <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                <span
                  style={{
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  <span style={{ border: "none" }}>
                    <img
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      src={imag}
                      width={600}
                      height={300}
                    />
                  </span>
                </span>
              </p>
              <p>&nbsp;</p>
              <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                <span
                  style={{
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  An autoencoder can be used to recreate the original data from
                  the compressed data if someone requires it.
                </span>
              </p>
              <p>&nbsp;</p>
              <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                <span
                  style={{
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  Types of Autoencoders:
                </span>
              </p>
              <ol
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  paddingInlineStart: "48px",
                }}
              >
                <li
                  style={{
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                    <span style={{ fontSize: "11pt" }}>
                      Under complete Autoencoders&nbsp;
                    </span>
                  </p>
                </li>
                <li
                  style={{
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                    <span style={{ fontSize: "11pt" }}>
                      Sparse Autoencoders
                    </span>
                  </p>
                </li>
                <li
                  style={{
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                    <span style={{ fontSize: "11pt" }}>
                      Contractive Autoencoders
                    </span>
                  </p>
                </li>
                <li
                  style={{
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                    <span style={{ fontSize: "11pt" }}>
                      Denoising Autoencoders
                    </span>
                  </p>
                </li>
                <li
                  style={{
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                    <span style={{ fontSize: "11pt" }}>
                      Variational Autoencoders&nbsp;
                    </span>
                  </p>
                </li>
              </ol>
              <p>&nbsp;</p>
              <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                <span
                  style={{
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  Autoencoders are generally used for:
                </span>
              </p>
              <ol
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  paddingInlineStart: "48px",
                }}
              >
                <li
                  style={{
                    listStyleType: "upper-alpha",
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                    <span style={{ fontSize: "11pt" }}>Anomaly detection</span>
                  </p>
                </li>
                <li
                  style={{
                    listStyleType: "upper-alpha",
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                    <span style={{ fontSize: "11pt" }}>
                      Data denoising image and audio
                    </span>
                  </p>
                </li>
                <li
                  style={{
                    listStyleType: "upper-alpha",
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                    <span style={{ fontSize: "11pt" }}>Image inpainting</span>
                  </p>
                </li>
                <li
                  style={{
                    listStyleType: "upper-alpha",
                    fontSize: "11pt",
                    fontFamily: "Arial",
                    color: "#000000",
                  }}
                >
                  <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
                    <span style={{ fontSize: "11pt" }}>
                      Information retrieval
                    </span>
                  </p>
                </li>
              </ol>
            </div>
          </Container>

          <br></br>
          <br></br>

          {/* Button to be added at the end of every experiment 
    below the content.. also copy the two function above 
    goToSimulation & goToTest and import withRouter 
    as well as change in the bottom */}

          <Container>
            <div
              className="mb-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                outline
                color="success"
                size="lg"
                onClick={this.goToSimulation}
                style={{
                  width: 150,
                  marginRight: 10,
                  fontWeight: "bold",
                  border: "2px solid",
                }}
              >
                Simulation
              </Button>{" "}
              {"  "}
              <Button
                outline
                color="success"
                size="lg"
                onClick={this.goToTest}
                style={{ width: 150, fontWeight: "bold", border: "2px solid" }}
              >
                Test
              </Button>
            </div>
          </Container>
        </body>
      </div>
    );
  }
}

export default withRouter(AboutAutoEncoder);
