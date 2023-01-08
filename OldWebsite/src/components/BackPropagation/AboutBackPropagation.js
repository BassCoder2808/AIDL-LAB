import React, { Component } from 'react';
//import Content from './ContentComponent';
import { Container } from "react-bootstrap";
import { Button } from 'reactstrap';
import { withRouter } from "react-router";

class AboutCourse extends Component {

  goToSimulation = () => {
    this.props.history.push('/simulation-backpropagation');
  }

  goToTest = () => {
    this.props.history.push('/test-backpropagation');
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
                                          <li>To understand Backpropagation</li>
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
                                      <li>Able to apply Backpropagation algorithm to train a neural network.</li>
                                      <li>Understanding of the BackPropagation Algorithm.</li>
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
        <div style={{padding: '10px'}}>

                <h2>Concept</h2>
                <center>
                        <h3>BackPropagation</h3>
                </center>
                    <p>
                  The Backpropagation neural network is a multilayered, feedforward neural network and is by far the most extensively used. It is also considered one of the simplest and most general methods used for supervised training of multilayered neural networks. Backpropagation works by approximating the non-linear relationship between the input and the output by adjusting the weight values internally. It can further be generalized for the input that is not included in the training patterns (predictive abilities).
                    </p>
                    <p>
                  Generally, the Backpropagation network has two stages, training and testing. During the training phase, the network is "shown" sample inputs and the correct classifications. For example, the input might be an encoded picture of a face, and the output could be represented by a code that corresponds to the name of the person.
                    </p>
                    <p>
                  A further note on encoding information - a neural network, as most learning algorithms, needs to have the inputs and outputs encoded according to an arbitrary user defined scheme. The scheme will define the network architecture so that once a network is trained, the scheme cannot be changed without creating a totally new net. Similarly there are many forms of encoding the network response.
                    </p>
                  <p>
                  The following figure shows the topology of the Backpropagation neural network that includes and input layer, one hidden layer and an output layer. It should be noted that Backpropagation neural networks can have more than one hidden layer.
                  </p>
                <center>
                    <img style={{width: '100%'}} src="http://vlab.spit.ac.in/scvirtuallab/images/e2b.png" />
                </center>

                <br/>
                <br/>
                <br/>

                <h2>Procedure</h2>
                <center>
                    <div style={{textAlign: 'left', width: 'fit-content'}}>
                        <b>Step 0.</b> Set w and alpha (learning to random rate) values.
                        <br/>
                        <b>Step 1.</b> Perform steps 2 to 9 when stopping condition is false.
                        <br />
                        <b>Step 2.</b> Perform steps 3 to 8 for each training pair.
                        <br />
                        <b>Step 3.</b> Receive ip signal from xi and transfer to zj
                        <br />
                        <b>Step 4.</b> In Hidden Unit calculate the net ip and op:
                                <br/>
                                <img width="200" height="40" src="assets/images/eqn_netip.png" />
                                <br/>
                                <img width="125" height="40" src="assets/images/eqn_netop.png" />
                                <br/>
                            The function used above is the bipolar sigmoid ie:
                                <br/>                         
                                <img width="100" height="40" src="assets/images/eqn_bipolar_sigmoid.png" />
                                <br/>
                            Its binary counterpart is:
                                <img width="75" height="40" src="assets/images/eqn_binary_sigmoid.png" />
                        <br />
                        <b>Step 5.</b> Similarly, calculate the net ip and op for each op unit.
                        <br />
                        <b>Step 6.</b> Calculate error correction factor for o/p unit.
                        <br/>
                                <img width="175" height="40" src="assets/images/eqn_err.png" />
                        <br/>
                                <img width="175" height="40" src="assets/images/eqn_total_err.png" />
                        <br/>
                                and send this to hidden layer
                        <br />
                        <b>Step 7.</b> Each hidden unit 'j', sums its delta inputs from op units.
                        <br/>
                                <img width="200" height="200" src="assets/images/eqn_offset.png" />
                        <br />
                        <b>Step 8.</b> Update the weight by weight(new) = weight(old) + offset
                        <br />
                        <b>Step 9.</b> Check for stopping condition
                        <br/>
                        *train certain no. of epochs
                        <br/>
                        *where actual op equals to target op
                    </div>
                </center>



                <br/>
                <br/>
                <br/>

                <h2>Illustration</h2>
                <center>
                    <img style={{ width: '100%' }} src="http://vlab.spit.ac.in/scvirtuallab/images/e2c.png"/>
                    <img style={{ width: '100%' }} src="http://vlab.spit.ac.in/scvirtuallab/images/e2d.png"/>
                </center>
                
                <br/>
                <br/>
                <br/>

                <h2>References</h2>
                <center>
                      <a href="https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/">https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/</a>
                </center>
        </div>
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