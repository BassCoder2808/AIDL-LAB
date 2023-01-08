import React, { Component } from "react";
// import { quizData } from '../shared/quizData.js';
import { Card, CardTitle, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import "../../styles.css";

class AutoEncoderTest extends Component {
  quizData = [{}];
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false,
  };

  loadQuizData = () => {
    this.setState(() => {
      return {
        questions: this.quizData[this.state.currentQuestion].question,
        answer: this.quizData[this.state.currentQuestion].answer,
        options: this.quizData[this.state.currentQuestion].options,
        quizName: this.quizName,
      };
    });
  };

  componentDidMount() {
    this.quizData = [
      {
        id: 0,
        question: "How is the output of an autoencoder?",
        options: [
          "Same as the original input",
          "Distorted",
          "Compressed",
          "Expanded",
        ],
        answer: "Compressed",
      },
      {
        id: 1,
        question: `What does the decoded layer in the autoencoder do?`,
        options: [
          "Codes the input into latent images",
          "Decodes the input into original form",
          "Does not have any function",
          "Decodes the input into compressed form",
        ],
        answer: `Decodes the input into original form`,
      },
      {
        id: 2,
        question: "How can autoencoders be used in market finances?",
        options: [
          "Identify unusual activity and predict market trends",
          "Predict fraudulent customers",
          "Classify best market performers",
          "All of the Above",
        ],
        answer: "Identify unusual activity and predict market trends",
      },
      {
        id: 3,
        question: "How are autoencoders trained?",
        options: [
          "By using unsupervised methods",
          "By using supervised methods",
          "By using reinforcement methods",
          "None Of the above",
        ],
        answer: `By using supervised methods`,
      },
      {
        id: 4,
        question: "What is a drawback of autoencoders?",
        options: [
          "It can misclassify input data",
          "It can eliminate vital information",
          "It is not accurate",
          "All of the Above",
        ],
        answer: `It can eliminate vital information`,
      },
    ];

    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
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
          answer: this.quizData[this.state.currentQuestion].answer,
        };
      });
    }
  }
  //check answer
  checkAnswer = (answer) => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === this.quizData.length - 1) {
      const { myAnswer, answer, score } = this.state;
      if (myAnswer === answer) {
        this.setState({
          score: score + 1,
        });
        console.log(score);
        //print(score);
      }

      this.setState({
        isEnd: true,
      });
    }
  };

  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    console.log(this.state.score);

    if (isEnd) {
      return (
        <React.Fragment>
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
          <div className="container">
            <br />
            <h1
              style={{
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {this.quizName}
            </h1>
          </div>
          <div className="result">
            <div
              className="container hi"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                className="container"
                body
                outline
                color="info"
                style={{ border: "2px solid", flex: 1, paddingTop: "20px" }}
              >
                <CardTitle style={{ fontWeight: "bold", fontSize: "25px" }}>
                  {" "}
                  Quiz Over your Final score is {this.state.score} points{" "}
                </CardTitle>
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
          <div className="container">
            <br />
            <h1
              style={{
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {this.quizName}
            </h1>
          </div>
          <div
            className="container hi"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              className="container"
              body
              outline
              color="info"
              style={{ border: "2px solid", flex: 1, paddingTop: "20px" }}
            >
              <CardTitle style={{ fontWeight: "bold", fontSize: "25px" }}>
                {" "}
                {this.state.questions}{" "}
              </CardTitle>
              <span>{`Questions ${currentQuestion + 1}  out of ${
                this.quizData.length
              } remaining `}</span>
              {options.map((option) => (
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
                <Button
                  outline
                  color="info"
                  size="lg"
                  disabled={this.state.disabled}
                  onClick={this.nextQuestionHandler}
                  style={{ fontWeight: "bold", border: "2px solid" }}
                >
                  {" "}
                  Next{" "}
                </Button>
              )}
              {/* //adding a finish button */}

              {currentQuestion === this.quizData.length - 1 && (
                <Button
                  outline
                  color="info"
                  size="lg"
                  onClick={this.finishHandler}
                  style={{ fontWeight: "bold", border: "2px solid" }}
                >
                  {" "}
                  Finish{" "}
                </Button>
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

export default withRouter(AutoEncoderTest);
