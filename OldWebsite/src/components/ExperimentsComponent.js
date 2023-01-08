import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { withRouter } from "react-router";

class Experiments extends Component {
  goToCourse = (expId) => {
    localStorage.setItem("selectedExp", expId);
    console.log("The expID is: ", expId);
    switch (expId) {
      case 0:
        this.props.history.push("/aboutcourse-yolo");
        break;
      case 1:
        this.props.history.push("/aboutcourse-posenet");
        break;
      case 2:
        this.props.history.push("/aboutcourse-backpropagation");
        break;
      case 3:
        this.props.history.push("/aboutcourse-cnn");
        break;
      case 4:
        this.props.history.push("/aboutcourse-resnet");
        break;
      case 5:
        this.props.history.push("/aboutcourse-ocr");
        break;
      case 6:
        this.props.history.push("/aboutcourse-kmeans");
        break;
      case 7:
        this.props.history.push("/aboutcourse-svm");
        break;
      case 8:
        this.props.history.push("/aboutcourse-knn");
        break;
      case 9:
        this.props.history.push("/aboutcourse-linearreg");
        break;
      case 10:
        this.props.history.push("/aboutcourse-logisticreg");
        break;
      case 11:
        this.props.history.push("/aboutcourse-randomforest");
        break;
      case 12:
        this.props.history.push("/aboutcourse-autoencoder");
        break;
      default:
        this.props.history.push("/home");
        break;
    }
  };

  RenderExp({ exp }) {
    return (
      <React.Fragment>
        <br />

        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <br />

          <Card
            outline
            color="info"
            onClick={() => this.goToCourse(exp.id)}
            style={{
              border: "2px solid",
              width: "18rem",
              flex: 1,
              backgroundColor: "white",
            }}
          >
            <CardImg
              height="200"
              variant="top"
              src={exp.image}
              alt={exp.name}
            />
            <CardHeader style={{ fontWeight: "bold" }}>{exp.name}</CardHeader>
            <CardBody>
              <CardTitle> {exp.title} </CardTitle>
              <CardText>
                <br />
              </CardText>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </CardBody>
          </Card>
          <br />
        </div>
      </React.Fragment>
    );
  }

  render() {
    const explist = this.props.exps.map((exp) => {
      return (
        <div className="col-xs-12 col-sm-6 col-md-4" key={exp.id}>
          {this.RenderExp((exp = { exp }))}
          {/* <RenderExp exp={exp} onClick={this.props.onClick} /> */}
        </div>
      );
    });

    return (
      <div className="container">
        <br />
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Experiments
        </h1>
        <div className="row">{explist}</div>
        <br></br>
      </div>
    );
  }
}

export default withRouter(Experiments);
