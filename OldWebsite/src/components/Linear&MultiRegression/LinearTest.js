import React, { Component } from "react";
// import { quizData } from '../shared/quizData.js';
import { Card, CardTitle, Button } from "reactstrap";
import { withRouter } from "react-router";
import "../../styles.css";

class LinearTest extends Component {
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
        question: `Regression analysis is inappropriate when; `,
        options: [
          `you have two variables that are measured on an interval or ratio scale.  
        `,
          `you want to make predictions for one variable based on information about another variable.`,
          `the pattern of data points forms a reasonably straight line.`,
          `there is heteroscedasticity in the scatter plot. `,
        ],
        answer: `there is heteroscedasticity in the scatter plot. `,
      },
      {
        id: 1,
        question: `In regression analysis, the variable that is being predicted is:`,
        options: [
          `the independent variable`,
          `the dependent variable`,
          `usually denoted by x `,
          `usually denoted by r`,
        ],
        answer: `the dependent variable `,
      },
      {
        id: 2,
        question: `Which of the following metrics can be used for evaluating regression models?
        i) R Squared
        ii) Adjusted R Squared
        iii) F Statistics
        iv) RMSE / MSE / MAE`,
        options: [
          `ii and iv`,
          `i and ii`,
          `ii, iii and iv`,
          `i, ii, iii and iv`,
        ],
        answer: `i, ii, iii and iv`,
      },
      {
        id: 3,
        question: `In a simple linear regression model (One independent variable), If we change the input variable by 1 unit. How much output variable will change?
        `,
        options: [`by 1`, `no change`, `by intercept`, `by its slope`],
        answer: `by its slope`,
      },
      {
        id: 4,
        question: `The least square method calculates the best-fitting line for the observed data by minimizing the sum of the squares of the _______ deviations`,
        options: [`Vertical`, `Horizontal`, `Both of these`, `None of these`],
        answer: `Vertical`,
      },
      {
        id: 5,
        question: `Training Linear Regression model using Normal Equation is linear with both the number of training datasets that have to be made and the number of features:`,
        options: [`True`, `False`],
        answer: `False`,
      },

      {
        id: 6,
        question: `In practice, the Line of best fit or regression line is found when _____________`,
        options: [
          `Sum of residuals (∑(Y-h(X))) is minimum`,
          `Sum of the absolute value of residuals (∑|Y-h(X)|) is maximum`,
          `Sum of the square of residuals ( ∑ (Y-h(X))2) is minimum`,
          `Sum of the square of residuals ( ∑ (Y-h(X))2) is maximum`,
        ],
        answer: `Sum of the square of residuals ( ∑ (Y-h(X))2) is minimum`,
      },

      {
        id: 7,
        question: `Multiple linear regression (MLR) is a __________ type of statistical analysis.`,
        options: [`Univariate`, `Bivariate`, `Multivariate`],
        answer: `Multivariate`,
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
      );
    } else {
      return (
        <React.Fragment>
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

export default withRouter(LinearTest);
