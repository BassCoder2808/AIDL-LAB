import React, { Component } from "react";
// import { quizData } from '../shared/quizData.js';
import { Card, CardTitle, Button } from 'reactstrap';

import '../../styles.css';
import { withRouter } from "react-router-dom";

// Please change it and make it for posent 


class BackPropagationTest extends Component {
  quizData = [{}]
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadQuizData = () => {
    this.setState(() => {
      return {
        questions: this.quizData[this.state.currentQuestion].question,
        answer: this.quizData[this.state.currentQuestion].answer,
        options: this.quizData[this.state.currentQuestion].options,
        quizName : this.quizName,
      };
    });
  };

  componentDidMount() {
    this.quizData = [
      {
        id: 0,
        question: `What is Posenet?`,
        options: [`It is a vision model that can be used to estimate the pose of a person in an image or video by estimating where key body joints are.`, `It is a vision model that can be used to estimate the pose of a person in an image or video by estimating where key body parts are.`,],
        answer: `It is a vision model that can be used to estimate the pose of a person in an image or video by estimating where key body joints are.`
      },
      {
        id: 1,
        question: `What is Pose Estimation?`,
        options: [`It recognizes who is in the image or video`, `It recognizes where the key body joints are in the image or video`, `It detects only the human figures in the image or video`],
        answer: `It recognizes where the key body joints are in the image or video`
      },
      {
        id: 2,
        question: `Performance of the model varies according to-`,
        options: [`The Device`, `The Output Stride(heatmaps and offset vectors)`, `Both`],
        answer: `Both`
      },
      {
        id: 3,
        question: `Is the PoseNet model image size invariant?`,
        options: [`Yes`, `No`],
        answer: `Yes`
      },
      {
        id: 4,
        question: `PoseNet can be configured to have a higher accuracy at the expense of performance.`,
        options: [`True`,`False`],
        answer: `True`
      },
      {
        id: 5,
        question: `What is the output stride?`,
        options: [`The output stride determines how much we’re scaling down the output relative to the input image size`,`The output stride determines how much we’re scaling up the output relative to the input image size`],
        answer: `The output stride determines how much we’re scaling down the output relative to the input image size`
      },
    ]

    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: this.quizData[this.state.currentQuestion].question,
          options: this.quizData[this.state.currentQuestion].options,
          answer: this.quizData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === this.quizData.length - 1) {
      const { myAnswer, answer, score } = this.state;
      if (myAnswer === answer) {
      
        this.setState({
          score: score + 1
          
        });
        console.log(score);
        //print(score);
      }

      this.setState({
        isEnd: true
      });
    }
  };

  render() {


    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    console.log(this.state.score)

    if (isEnd) {
      return (
        <React.Fragment>
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-posenet') }}
            style={{ width: 150, margin: 'auto', fontWeight: "bold", border: '2px solid' }}>
            Back To About Course
        </Button>
        <div className='container'>
          <br/>
            <h1 style={{fontWeight:"bold", display: "flex", justifyContent: "center", alignItems: "center"}}>{this.quizName}</h1>
        </div>
        <div className="result">
          <div className= "container hi" style={{width: '100%', display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Card className='container' body outline color="info" style={{ border:'2px solid', flex:1, paddingTop:'20px'}}>
            <CardTitle style={{fontWeight:"bold", fontSize:"25px"}}> Quiz Over your Final score is {this.state.score} points </CardTitle>
              <p>
                  The correct answer's for the questions are
                  <br></br>
                  <ul>
                    {this.quizData.map((item, index) => (
                      <li className="ui floating message options" key={index}>
                        {item.answer}
                      </li>
                    ))}
                  </ul>
                </p>
            </Card>
          </div>
        </div>
        </React.Fragment>
        
        

        // <div className="result">
        //   <h3>Quiz Over your Final score is {this.state.score} points </h3>
        //   <p>
        //     The correct answer's for the questions are
        //     <ul>
        //       {quizData.map((item, index) => (
        //         <li className="ui floating message options" key={index}>
        //           {item.answer}
        //         </li>
        //       ))}
        //     </ul>
        //   </p>
        // </div>
      );
    } else {
      return (
        <React.Fragment>
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-posenet') }}
            style={{ width: 150, margin: 'auto', fontWeight: "bold", border: '2px solid' }}>
            Back To About Course
        </Button>
        <div className='container'>
        <br/>
      <h1 style={{fontWeight:"bold", display: "flex", justifyContent: "center", alignItems: "center"}}>{this.quizName}</h1>
        </div>
        <div className= "container hi" style={{width: '100%', display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Card className='container' body outline color="info" style={{ border:'2px solid', flex:1, paddingTop:'20px'}}>
          <CardTitle style={{fontWeight:"bold", fontSize:"25px"}}> {this.state.questions} </CardTitle>
          <span>{`Questions ${currentQuestion+1}  out of ${this.quizData.length} remaining `}</span>
          {options.map(option => (
            <p
              key={option.id}
              className={`ui message options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < this.quizData.length - 1 && (
            // <button
              // className="ui inverted button"
              // disabled={this.state.disabled}
              // onClick={this.nextQuestionHandler}
            // >
            //   Next
            // </button>
            <Button outline color="info" size="lg" disabled={this.state.disabled}
            onClick={this.nextQuestionHandler}
            style={{fontWeight:"bold", border:'2px solid'}}> Next </Button>
          )}
          {/* //adding a finish button */}
         
          {currentQuestion === this.quizData.length - 1 && (
             <Button outline color="info" size="lg" onClick={this.finishHandler}
             style={{fontWeight:"bold", border:'2px solid'}}> Finish </Button>
            // <button className="ui inverted button" onClick={this.finishHandler}>
            //   Finish
            // </button>
          )}
       
          </Card>
          
       
        </div>

        </React.Fragment>
      
      );
    }
  }
}

export default withRouter(BackPropagationTest);

