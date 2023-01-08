import React, { Component } from 'react';
import Content from './ContentComponent';

class AboutCourse extends Component {
    
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
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/aim.png" alt="" />
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/prereq.png" alt="" />
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
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
            <div class="container"><small>Copyright © SPIT 2022</small></div>
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
                                          <li>To understand object detection</li>
                                          <li>To learn the differnece between object detection techniques</li>
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
        <Content/>
        </div>
</body>
 
    </div>
  );
  }
}

export default AboutCourse;