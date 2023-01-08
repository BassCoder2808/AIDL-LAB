// import React from "react";

// export default function AboutLin() {
//   return (
//     <>
//       <a href="/#/simulation-linearreg">Go to simulation</a>
//       <br></br>
//       <a href="/#/test-linearreg">Go to Test</a>
//     </>
//   );
// }

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Button } from "reactstrap";
import { withRouter } from "react-router";

class AboutLin extends Component {
  goToSimulation = () => {
    this.props.history.push("/simulation-linearreg");
  };
  goToSimulationHouse = () => {
    window.location.href = "https://www.kaggle.com/code/sachinbagoriya2002/notebook94f8cdcb2d/notebook";
  };

  goToTest = () => {
    this.props.history.push("/test-linearreg");
  };
  render() {
    window.scrollTo(0,0);
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
              <small>Copyright © SPIT 2022</small>
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
                              To understand Linear & Multi-linear Regression
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
                          <li>Intermediate understanding of Python</li>
                          <li>Basic application of Mathematics</li>
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
                          <li>Able to apply Linear Regression in projects</li>
                          <li>
                            Learn the working of House predictions model using
                            multi-linear regression
                          </li>
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
          <div style={{ padding: 10 }}>
            <h1>Overview</h1>
            Linear regression analysis is used to predict the value of a
            variable based on the value of another variable. The variable you
            want to predict is called the dependent variable. The variable you
            are using to predict the other variable's value is called the
            independent variable. This form of analysis estimates the
            coefficients of the linear equation, involving one or more
            independent variables that best predict the value of the dependent
            variable. Linear regression fits a straight line or surface that
            minimizes the discrepancies between predicted and actual output
            values. There are simple linear regression calculators that use a
            “least squares” method to discover the best-fit line for a set of
            paired data. You then estimate the value of X (dependent variable)
            from Y (independent variable).
            <br></br>
            <br></br>
            <h1>Cost Function</h1>
            <p>The cost function of the linear regression is</p>
            <img src="https://miro.medium.com/max/518/1*Ufonqa20VceIYU0i2UfMnQ.png" />
            <p>To make it simpler for our understanding, let's rewrite it as</p>
            <img src="https://miro.medium.com/max/640/1*mDEzcRicu3Oc2rrvB7A-uw.png" />
            <p>
              Here m means the total number of examples in your dataset. In our
              example, m will be the total number of houses in our dataset.
            </p>
            <br />
            <br />
            <h1>Performance of Regression</h1>
            <p>1. Mean Absolute Error (MAE)</p>
            <p>
              {" "}
              By using MAE, we calculate the average absolute difference between
              the actual values and the predicted values.{" "}
            </p>
            <p>2. Mean Absolute Percentage Error (MAPE) </p>
            <p>
              {" "}
              It is the average of the ratio of the absolute difference between
              actual & predicted values and actual values.{" "}
            </p>
            <p>3. Root Mean Square Error (RMSE)</p>
            <p>
              {" "}
              RMSE calculates the square root average of the sum of the squared
              difference between the actual and the predicted values.{" "}
            </p>
            <p>4. R-squared values</p>
            <p>
              {" "}
              RMSE calculates the square root average of the sum of the squared
              difference between the actual and the predicted values.{" "}
            </p>
            <h1>References</h1>
            Basics of Linear Regression:{" "}
            <p>
              <a href="https://www.ibm.com/in-en/topics/linear-regression">
                https://www.ibm.com/in-en/topics/linear-regression
              </a>
            </p>
            Research Paper for Multi-Linear Regression:
            <p>
              {" "}
              <a href="https://www.scirp.org/journal/paperinformation.aspx?paperid=115003">
                https://www.scirp.org/journal/paperinformation.aspx?paperid=115003
              </a>
            </p>
          </div>
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
                Simulation Linear Regression
              </Button>{" "}
              {"  "}
              <Button
                outline
                color="success"
                size="lg"
                onClick={this.goToSimulationHouse}
                style={{
                  width: 150,
                  marginRight: 10,
                  fontWeight: "bold",
                  border: "2px solid",
                }}
              >
                Simulation House Price Prediction
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

export default withRouter(AboutLin);
