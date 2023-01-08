import React, { Component } from "react";

import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";

class AutoEncoderSim extends Component {
  render() {
    return (
      <>
        {/* {this.props.history.push("/simulation-autoencoder")} */}
        <Button
          size="sm"
          onClick={() => {
            this.props.history.push("/aboutcourse-autoencoder");
          }}
          style={{
            width: 150,
            margin: "auto",
            fontWeight: "bold",
            border: "2px solid",
          }}
        >
          Back To About Course
        </Button>
        <h3 style={{ textAlign: "center" }}>
          {" "}
          Please try Reloading this page If the simulation doesn't appear
        </h3>
        <iframe
          src="https://karan-shah-2513.github.io/vlabs-autoencoder/"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          width="100%"
          height="100%"
          scrolling="auto"
        ></iframe>
      </>
    );
  }
}

export default withRouter(AutoEncoderSim);
