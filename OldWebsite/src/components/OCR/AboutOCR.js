import React, { Component } from 'react';
//import Content from './ContentComponent';
import { Container, Row, Image, Col } from "react-bootstrap";
import { Button } from 'reactstrap';
import { withRouter } from "react-router";
class AboutCourse extends Component {

  goToSimulation = () => {
    this.props.history.push('/simulation-ocr');
  }

  goToTest = () => {
    this.props.history.push('/test-ocr');
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
                                          <li>To understand Optical Character Recognition Algorithm</li>
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
                                      <li>Basic understanding of Neural Networks</li>
                                      
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
                                      <li>Understanding of Optical Character Recognition.</li>
                                      <li>Understanding of tesseract OCR tool.</li>
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
                    marginTop: "20%",
                    textAlign: "center",
                }}
                >
                <b>
                    <Row>OCR</Row><Row>Optical Character Recognition</Row></b>
                </h1>
            </Col>
            
            </Row>

            <Row>
            <p style={{ fontFamily: "Cursive", marginTop: "5%", fontSize: "20px" }}>
            Optical character recognition, or OCR, is a process which allows us to convert text based images into editable electronic documents. 
        These images can be produced by scanners, cameras, read only files, etc.
        The images can include documents, invoices, legal forms, ID cards or OCR in the wild like reading street signs, shipping container numbers or vehicle number plates.  
        </p>
                <br></br>

            </Row>
            <Row>
            <h1
                style={{
                    fontFamily: "Cursive",
                    fontSize: "3em",
                    textAlign: "center",
                }}
                >
                <b>
                    <Row>Tesseract</Row></b>
                </h1>
            </Row>
            <Row>
            <p style={{ fontFamily: "Cursive", marginTop: "5%", fontSize: "20px" }}>Tesseract is a general purpose OCR engine,
            but it works best when we have clean black text on solid white background in a common font. 
        It also works well when the text is approximately horizontal and the text height is at least 20 pixels. 
        If the text has a surrounding border, it may be detected as some random text.</p>
            </Row>
            <Row>
            <Col>
            <div style={{ marginTop:"20px ", fontFamily: "Cursive"}}>
                <h3>References:</h3>
                <ul style={{ listStyleType: "square" }}>
                <li>
                    <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=cAkklvGE5io"
                    >
                    Optical Character Recognition — Simply Explained
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    href="https://towardsdatascience.com/a-gentle-introduction-to-ocr-ee1469a201aa"
                    >
                    OCR implementation In Python
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://nanonets.com/blog/ocr-with-tesseract/">
                    Tessaeract : A Simple Explanation
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

export default withRouter(AboutCourse);



