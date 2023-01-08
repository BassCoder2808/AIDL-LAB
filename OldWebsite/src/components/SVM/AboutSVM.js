import React, { Component } from 'react';
//import Content from './ContentComponent';
import { Container } from "react-bootstrap";
import { Button } from 'reactstrap';
import { withRouter } from "react-router";

class AboutSVM extends Component {

  goToSimulation = () => {
    this.props.history.push('/simulation-SVM');
  }

  goToTest = () => {
    this.props.history.push('/test-SVM');
  }

    
  render(){

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
                                          <li>To understand SVM</li>
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
                                      <li>Able to apply SVM model in the application. </li>
                                      <li>Understanding of the SVM Concept.</li>
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
             <center>
                <p style={{padding: '10'}}>
                    In machine learning, support-vector machines are supervised learning models with associated learning algorithms that analyze data used for classification and regression analysis. 
                    Support vector machine is highly preferred by many as it produces significant accuracy with less computation power. Support Vector Machine, abbreviated as SVM can be used for both regression and classification tasks. But, it is widely used in classification objectives.
                    The objective of the support vector machine algorithm is to find a hyperplane in an N-dimensional space(N — the number of features) that distinctly classifies the data points.
                </p>

             </center>
                &nbsp;&nbsp;&nbsp;&nbsp;<h4>References</h4>
                &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://towardsdatascience.com/support-vector-machine-introduction-to-machine-learning-algorithms-934a444fca47">https://towardsdatascience.com/support-vector-machine-introduction-to-machine-learning-algorithms-934a444fca47</a><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.youtube.com/watch?v=Y6RRHw9uN9o">https://www.youtube.com/watch?v=Y6RRHw9uN9o</a>
        </div>
        {/* <Container fluid="lg">
            <Row>
            <Col>
                <h1
                style={{
                    fontFamily: "Cursive",
                    fontSize: "4em",
                    marginTop: "20%",
                    textAlign: "center",
                }}
                >
                <b>
                    <Row>SVM</Row><Row>Support Vector Machine</Row></b>
                </h1>
            </Col>
            
            </Row>

            <Row>
            <p style={{ fontFamily: "Cursive", marginTop: "5%", fontSize: "20px" }}>
            Support-vector machines are supervised learning models with associated learning algorithms that analyze data used for classification and regression analysis.
            </p>
                <br></br>

            </Row>
            <Row>
            <Col>
            <div style={{ fontFamily: "Cursive"}}>
                <h3>References:</h3>
                <ul style={{ listStyleType: "square" }}>
                <li>
                    <a target="_blank" href="https://www.kdnuggets.com/2016/07/support-vector-machines-simple-explanation.html#:~:text=A%20Support%20Vector%20Machine%20(SVM,both%20classification%20and%20regression%20purposes.&text=SVMs%20are%20based%20on%20the,shown%20in%20the%20image%20below.">
                    Support Vector Machines: A Simple Explanation
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    href="https://towardsdatascience.com/support-vector-machine-simply-explained-fee28eba5496"
                    >
                    Support Vector Machine — Simply Explained
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    href="https://pythonprogramming.net/support-vector-machine-intro-machine-learning-tutorial/"
                    >
                    Support Vector Machine Introduction
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
        </Container> */}

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

export default withRouter(AboutSVM);