import React, { Component } from 'react'

import {Button} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class SVMSimulation extends Component {
  render() {
    return (
      <>
        <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-svm') }}
          style={{ width: 150, margin: 'auto', fontWeight: "bold", border: '2px solid' }}>
          Back To About Course
        </Button>
      <iframe src="https://taniarajabally.github.io/Vlabs/"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        width="100%"
        height="100%"
        scrolling="auto">
      </iframe>
      </>
    )
  }
}

export default withRouter(SVMSimulation)