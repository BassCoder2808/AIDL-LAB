import React, { Component } from 'react';
//import Content from './ContentComponent';
import { Container, Row, Col } from "react-bootstrap";
import { Button } from 'reactstrap';
import { withRouter } from "react-router";

class AboutLogistic extends Component {

  goToSimulation = () => {
    this.props.history.push('/simulation-logisticreg');
  }

  goToTest = () => {
    this.props.history.push('/test-logisticreg');
  }

    
  render(){
    window.scrollTo(0,0);
    let selectedExpId = localStorage.getItem("selectedExp");
  
  return (
    <div className="App">

<body id="page-top">
       
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                

                <br/>
                <h2 class="page-section-heading text-center text-uppercase  mb-0">About the course</h2>
                
           <br/><br/>
                
                <div class="row">
                    
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }} class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/aim.png" alt="" />
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }} class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/prereq.png" alt="" />
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }} class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/outcome.png" alt="" />
                        </div>
                    </div>
                 
      </div>
            </div>
        </section>
       

        
        <section class="copyright py-4 text-center text-white">
            <div class="container"><small>Copyright © SPIT 2020</small></div>
        </section>

        <div class="scroll-to-top d-lg-none position-fixed">
            <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
        </div>

        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                  
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Aim</h2>
                             
                                    <br/>
                          
                                    <p class="mb-5">
                                        <ul>
                                          <li>Demonstrate and Understand the working of Logistic Regression with the help of a real life example.</li>
                                        </ul>  
                                    </p>
                                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i class="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                   
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Pre- requisites</h2>
                                  
                                   <br/>
                                    
                                    <ul>
                                      <li>Well acquainted with python</li>
                                      <li>Basic understanding of Vectors</li>
                                      
                                    </ul>  
                                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i class="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                          
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Learning Outcomes</h2>
                                 
                               <br/>
                          
                                    <ul>
                                      <li>Able to apply Logistic Regression in the application. </li>
                                      <li>Understanding of the Logistic Regression Concept.</li>
                                    </ul>  
                                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i class="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
             <h2 class="page-section-heading text-center text-uppercase  mb-0">Course Content</h2>
        </div>
        <Container fluid="lg">
            <Row>
            <Col>
                <h1
                style={{
                    fontFamily: "Cursive",
                    fontSize: "4em",
                    marginTop: "10%",
                    textAlign: "center",
                }}
                >
                <b>
                    <Row>Logistic Regression</Row></b>
                </h1>
            </Col>
            
            </Row>

            <Row>
            <p style={{ fontFamily: "Cursive", marginTop: "5%", fontSize: "20px" }}>
                Logistic regression is a transformation of the linear regression model that allows us to probabilistically model binary variables. It is also known as a generalized linear model that uses a logit-link. Logistic regression is basically a supervised classification algorithm. In a classification problem, the target variable(or output), y, can take only discrete values for a given set of features(or inputs), X.<br></br>

                Logistic regression becomes a classification technique only when a decision threshold is brought into the picture. The setting of the threshold value is a very important aspect of Logistic regression and is dependent on the classification problem itself.
                
                The decision for the value of the threshold value is majorly affected by the values of precision and recall. Ideally, we want both precision and recall to be 1, but this seldom is the case.

                <b>Assumptions for Logistic Regression:</b><br></br>
                1. The dependent variable must be categorical in nature.<br></br>
                2. The independent variable should not have multi-collinearity.

                <br></br><br></br>

                <b>Logistic Regression Equation:</b><br></br>
                The Logistic regression equation can be obtained from the Linear Regression equation. The mathematical steps to get Logistic Regression equations are given below<br></br>
                
                We know the equation of the straight line can be written as:<br></br>
                y = bo + b1x1 + b2x2 + b3x3 + ... +bnxn <br></br>
                
                In Logistic Regression y can be between 0 and 1 only, so for this let's divide the above equation by (1-y):<br></br>
                y / (1-y); 0 for y=0 and infinity for y=1;<br></br>  
                
                The above equation is the final equation for Logistic Regression.<br></br><br></br>

                Steps in Logistic Regression: To implement the Logistic Regression using Python, we will use the same steps as we have done in previous topics of Regression. Below are the steps:<br></br>

                1. Data Pre-processing step
                2. Fitting Logistic Regression to the Training set
                3. Predicting the test result
                4. Test accuracy of the result(Creation of Confusion matrix)
                5. Visualizing the test set result.
            </p>
                <br></br>

            </Row>
            <Row>
            <Col>
            <div style={{ fontFamily: "Cursive"}}>
                <h3>References:</h3>
                <ul style={{ listStyleType: "square" }}>
                <li>
                    <a target="_blank" href="https://www.javatpoint.com/logistic-regression-in-machine-learning">
                    Logistic Regression in Machine Learning
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    href="https://towardsdatascience.com/the-data-scientists-field-guide-to-logistic-regression-part-1-intuition-97084b11bd68"
                    >
                    Logistic regression theory for practitioners
                    </a>
                </li>
           
                </ul>
                </div>
            </Col>
            <br></br>
            <br></br>
            <br></br>
            </Row>
            <br></br>
            <br></br>
            <br></br>
        </Container>

    <br></br><br></br>

    {/* Button to be added at the end of every experiment 
    below the content.. also copy the two function above 
    goToSimulation & goToTest and import withRouter 
    as well as change in the bottom */}

    <Container >

    <div className="mb-2"   style={{ display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center" }}>

        <Button outline color="success"  size="lg" onClick={this.goToSimulation}
            style={{width:150, marginRight:10, fontWeight:"bold", border:'2px solid'}}> 
            Simulation 
        </Button> { "  " }
        <Button outline color="success" size="lg" onClick={this.goToTest}
            style={{ width:150, fontWeight:"bold", border:'2px solid'}}> 
            Test 
        </Button>
    </div>
    </Container> 
</body>
 
    </div>
  );
  }
}

export default withRouter(AboutLogistic);