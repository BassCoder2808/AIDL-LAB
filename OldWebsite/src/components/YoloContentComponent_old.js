import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";


const YoloContent = (props) => (
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
            <Row>YOLO</Row><Row>You only look once</Row></b>
        </h1>
      </Col>
      <Col xs={6}>
        <a target="_blank" href="https://pjreddie.com/darknet/yolo/ ">
          <Image
            style={{
              marginLeft: "50px",
              marginTop: "10%",
              alignContent: "center",
            }}
            width="200px"
            height="200px"
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
            style={{ alignContent: "center" }}
            width="400px"
            height="300px"
            src="https://pjreddie.com/media/image/Screen_Shot_2018-03-24_at_10.48.42_PM.png"
            rounded
          />
        </a>
      </Col>
      <br></br>
      <br></br>
      <br></br>
    </Row>
    <br></br>
    <br></br>
      <br></br>
  </Container>
      

);


export default YoloContent;