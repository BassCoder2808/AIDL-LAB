import React, { Component } from "react";

import { Button } from "reactstrap";
import { withRouter } from "react-router";

class LinearSimulation extends Component {
  render() {
    return (
      <>
        {/* TODO Add our About Course Link */}
        <Button
          size="sm"
          onClick={() => {
            this.props.history.push("/aboutcourse-linearreg");
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
        <iframe
          src="https://karan-shah-2513.github.io/Linear-Regression-Visualizer/"
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

export default withRouter(LinearSimulation);
