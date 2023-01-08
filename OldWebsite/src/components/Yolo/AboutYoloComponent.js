import React, { Component } from 'react';
import { Container, Row, Image, Col } from "react-bootstrap";
import { Button } from 'reactstrap';
import { withRouter } from "react-router";



class AboutYolo extends Component {

  goToSimulation = () => {
    this.props.history.push('/simulation-yolo');
  }

  goToTest = () => {
    this.props.history.push('/test-yolo');
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
                        <div style={{display: 'flex', alignItems: "center", justifyContent: 'center'}} class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
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
                          
                                    <p>
                                        <ul>
                                          <li>To understand object detection</li>
                                          <li>To learn the difference between object detection techniques</li>
                                          <li>To implement YOLO</li>
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
                                      <li>Basic understanding of machine learning</li>
                                      
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
                                      <li>Able to demonstrate object detection</li>
                                      <li>Understanding of the architecture of YOLO</li>
                                      <li>Object detection using pre-trained models</li>
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
        <div>
        <Container fluid="lg">
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
                    <Row>YOLO</Row><Row>You only look once</Row>
                </b>
                </h1>
            </Col>
            <Col xs={6} style={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                <a target="_blank" href="https://pjreddie.com/darknet/yolo/ ">
                <Image
                    width="100%"
                    src="https://pjreddie.com/media/image/yologo_2.png"
                    rounded
                />
                </a>
            </Col>
            </Row>

            <Row>
            <p style={{ fontFamily: "Cursive", marginTop: "5%", fontSize: "20px" }}>
                YOLO is a convolutional neural network (CNN) technique for doing object
                detection in real-time. The algorithm applies a single neural network to
                the full image, and then divides the image into regions and predicts
                bounding boxes and probabilities for each region.
            </p>
                <br></br>

            </Row>
            <Row>
            <Col>
            <div style={{ fontFamily: "Cursive"}}>
                <h3>References:</h3>
                <ul style={{ listStyleType: "square" }}>
                <li>
                    <a target="_blank" href="https://pjreddie.com/darknet/yolo/">
                    https://pjreddie.com/darknet/yolo/
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    href="https://medium.com/@jonathan_hui/real-time-object-detection-with-yolo-yolov2-28b1b93e2088"
                    >
                    Real-time Object Detection with YOLO, YOLOv2 and now YOLOv3
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    href="https://www.analyticsvidhya.com/blog/2018/12/practical-guide-object-detection-yolo-framewor-python/"
                    >
                    A Practical Guide to Object Detection using the Popular YOLO
                    Framework – Part III (with Python codes)
                    </a>
                </li>
                </ul>
                </div>
            </Col>
            
            <Col>
                <a target="_blank" href="https://pjreddie.com/darknet/yolo/ ">
                <Image
                    height="20%"
                    src="https://pjreddie.com/media/image/Screen_Shot_2018-03-24_at_10.48.42_PM.png"
                    rounded
                />
                </a>
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
            </Col>
            </Row>
        </Container>

    {/* Button to be added at the end of every experiment 
    below the content.. also copy the two function above 
    goToSimulation & goToTest and import withRouter 
    as well as change in the bottom */}

        
        </div>
    </body>
 
    </div>
  );
  }
}

export default withRouter(AboutYolo);