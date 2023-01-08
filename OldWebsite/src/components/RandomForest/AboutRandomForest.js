import React, { Component } from "react";
//import Content from './ContentComponent';
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "reactstrap";
import { withRouter } from "react-router";
import imag from "./aboutRandomForest.jpg";

class AboutRandomForest extends Component {
  goToSimulation = () => {
    this.props.history.push("/simulation-randomforest");
  };

  goToTest = () => {
    this.props.history.push("/test-randomforest");
  };

  render() {
    window.scrollTo(0, 0);
    let selectedExpId = localStorage.getItem("selectedExp");

    return (
      <div className="App">
        {/* <body id="page-top"> */}
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            <br />
            <h2 className="page-section-heading text-center text-uppercase  mb-0">
              About the course
            </h2>

            <br />
            <br />

            <div className="row">
              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal1"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/aim.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal2"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/prereq.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal3"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/outcome.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="copyright py-4 text-center text-white">
          <div className="container">
            <small>Copyright © SPIT 2020</small>
          </div>
        </section>

        <div className="scroll-to-top d-lg-none position-fixed">
          <a
            className="js-scroll-trigger d-block text-center text-white rounded"
            href="#page-top"
          >
            <i className="fa fa-chevron-up"></i>
          </a>
        </div>

        <div
          className="portfolio-modal modal fade"
          id="portfolioModal1"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="portfolioModal1Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fas fa-times"></i>
                </span>
              </button>
              <div className="modal-body text-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                        Aim
                      </h2>

                      <br />

                      <p className="mb-5">
                        <ul>
                          <li>
                            Demonstrate and Understand the working of Random
                            Forest with the help of a real life example.
                          </li>
                        </ul>
                      </p>
                      <button
                        className="btn btn-primary"
                        href="#"
                        data-dismiss="modal"
                      >
                        <i className="fas fa-times fa-fw"></i>Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="portfolio-modal modal fade"
          id="portfolioModal2"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="portfolioModal2Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fas fa-times"></i>
                </span>
              </button>
              <div className="modal-body text-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                        Pre- requisites
                      </h2>

                      <br />

                      <ul>
                        <li>Well acquainted with python</li>
                        <li>Basic understanding of Vectors</li>
                      </ul>
                      <button
                        className="btn btn-primary"
                        href="#"
                        data-dismiss="modal"
                      >
                        <i className="fas fa-times fa-fw"></i>Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="portfolio-modal modal fade"
          id="portfolioModal3"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="portfolioModal3Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fas fa-times"></i>
                </span>
              </button>
              <div className="modal-body text-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
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
                        className="btn btn-primary"
                        href="#"
                        data-dismiss="modal"
                      >
                        <i className="fas fa-times fa-fw"></i>Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="page-section-heading text-center text-uppercase  mb-0">
            Course Content
          </h2>
        </div>
        <Container fluid="lg">
          <h2 style={{ textAlign: "center" }}>Wine testing: Random forest</h2>
          <h3>Concept:</h3>
          <p
            style={{
              margin: "0cm",
              lineHeight: "115%",
              fontSize: "11pt",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Data visualisation is crucial in the domains of data analysis and
            machine learning because it enables you to see the patterns that are
            buried in the data. Model interpretation is made possible by model
            visualisation. With so many Python packages readily available now,
            the visualisation process is now simple.
          </p>
          <p
            style={{
              margin: "0cm",
              lineHeight: "115%",
              fontSize: "11pt",
              fontFamily: "Arial, sans-serif",
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              margin: "0cm",
              lineHeight: "115%",
              fontSize: "11pt",
              fontFamily: "Arial, sans-serif",
            }}
          >
            The more popular models for supervised learning (classification and
            suppression) tasks are tree-based models like Decision Trees, Random
            Forests, and XGBoost. This is due to the fact that those models fit
            non-linear data, which are routinely employed in practical
            applications, quite well.
          </p>
          <p
            style={{
              margin: "0cm",
              lineHeight: "115%",
              fontSize: "11pt",
              fontFamily: "Arial, sans-serif",
            }}
          >
            The Decision Tree serves as the foundational paradigm for all
            tree-based models. Decision trees are used in Random Forests in
            variations. Here, we'll talk about four alternative ways to see each
            decision tree in a random forest. Please keep in mind that the
            techniques covered here can be used to analyze any tree-based model,
            not just Random Forests. With just a few lines of code, the Python
            tools sklearn, graphviz, and dtreeviz make it simple to construct
            visualizations.
          </p>
          <p
            style={{
              margin: "0cm",
              lineHeight: "115%",
              fontSize: "11pt",
              fontFamily: "Arial, sans-serif",
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              margin: "0cm",
              lineHeight: "115%",
              fontSize: "11pt",
              fontFamily: "Arial, sans-serif",
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              margin: "0cm",
              lineHeight: "115%",
              fontSize: "11pt",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={imag}
              width={534}
              height={283}
            />
          </p>
          <p
            style={{
              margin: "0cm",
              lineHeight: "115%",
              fontSize: "11pt",
              fontFamily: "Arial, sans-serif",
              textAlign: "center",
            }}
          >
            Credits: IBM
          </p>
          <p
            style={{
              margin: "0cm",
              lineHeight: "115%",
              fontSize: "11pt",
              fontFamily: "Arial, sans-serif",
            }}
          >
            &nbsp;
          </p>
          <h3>Applications of Random forest:</h3>
          <p
            style={{
              margin: "0cm",
              lineHeight: "115%",
              fontSize: "11pt",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <strong>Finance domain: </strong>This method is&nbsp;favored over
            others since it takes less time to manage and per-process data. It
            can be used to assess high-risk consumers for fraud and issues with
            option pricing.
          </p>
          <p
            style={{
              margin: "0cm",
              lineHeight: "115%",
              fontSize: "11pt",
              fontFamily: "Arial, sans-serif",
            }}
          >
            In the
          </p>
          <p
            style={{
              margin: "0cm",
              lineHeight: "115%",
              fontSize: "11pt",
              fontFamily: "Arial, sans-serif",
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              margin: "0cm",
              lineHeight: "115%",
              fontSize: "11pt",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <strong>Healthcare domain: </strong>The random forest approach is
            used in computational biology to solve issues including classifying
            gene expression, finding biomarkers, and annotating sequences.
            Doctors can therefore estimate pharmacological reactions to certain
            drugs.
          </p>
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
        {/* </body> */}
      </div>
    );
  }
}

export default withRouter(AboutRandomForest);
