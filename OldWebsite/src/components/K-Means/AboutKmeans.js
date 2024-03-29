import React, { Component } from 'react';
//import Content from './ContentComponent';
import { Container, Row, Col } from "react-bootstrap";
import { Button } from 'reactstrap';
import { withRouter } from "react-router";

class AboutKmeans extends Component {

  goToSimulation = () => {
    this.props.history.push('/simulation-Kmeans');
  }

  goToTest = () => {
    this.props.history.push('/test-Kmeans');
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
                                          <li>To understand Kmeans</li>
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
                                      <li>Able to apply K-means in the application. </li>
                                      <li>Understanding of the K-means Concept.</li>
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
                    <Row>K-Means clustering algorithms</Row></b>
                </h1>
            </Col>
            
            </Row>

            <Row>
            <p style={{ fontFamily: "Cursive", marginTop: "5%", fontSize: "20px" }}>
                K-means clustering is one of the simplest and popular unsupervised machine learning algorithms. It aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean (cluster centers or cluster centroid), serving as a prototype of the cluster.
            </p>
                <br></br>

            </Row>
            <Row>
            <Col>
            <div style={{ fontFamily: "Cursive"}}>
                <h3>References:</h3>
                <ul style={{ listStyleType: "square" }}>
                <li>
                    <a target="_blank" href="https://www.edureka.co/blog/k-means-clustering/">
                    K-means algorithm: A Simple Explanation
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    href="https://towardsdatascience.com/understanding-k-means-clustering-in-machine-learning-6a6e67336aa1"
                    >
                    K-means Algorithm explained with accompanying code
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

export default withRouter(AboutKmeans);