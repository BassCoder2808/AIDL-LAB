import React, { Component } from "react";
// import { quizData } from '../shared/quizData.js';
import { Card, CardTitle, Button } from 'reactstrap';
import { withRouter } from "react-router-dom";
import '../../styles.css';

class LogisticTest extends Component {
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
        question: 'Logistic regression is used for ___?',
        options: ['Classification','Regression','Clustering','All of these',                ],
        answer: 'Classification'
      },
      {
        id: 1,
        question: `Logistic regression assumes a: `,
        options: ['Linear relationship between continuous predictor variables and the outcome variable.',
        'Linear relationship between continuous predictor variables and the logit of the outcome variable.',
        'Linear relationship between continuous predictor variables.',
        'Linear relationship between observations.'],
        answer: `Linear relationship between continuous predictor variables and the logit of the outcome variable`
      },
      {
        id: 2,
        question: 'Logistic regression is used when you want to:',
        options: ['Predict a dichotomous variable from continuous or dichotomous variables.',
                  'Predict a continuous variable from dichotomous variables.',
                  'Predict any categorical variable from several other categorical variables.',
                  'Predict a continuous variable from dichotomous or continuous variables.'
                ],
        answer: 'Predict a dichotomous variable from continuous or dichotomous variables.'
      },
      {
        id: 3,
        question: 'What is the cost function of the logistic regression?'
        ,
            options: ['Sigmoid function','Logistic Function','both (A) and (B)','none of these'],
            answer: `both (A) and (B)`
      },
      {
        id: 4,
        question: 'What is the the hypothesis of logistic regression?',
        options: ['to limit the cost function between 0 and 1',
        'to limit the cost function between -1 and 1',
        'to limit the cost function between -infinity and +infinity',
        'to limit the cost function between 0 and +infinity'],
        answer: `to limit the cost function between 0 and 1`
      },
      {
        id: 5,
        question: 'Why cost function which has been used for linear regression can’t be used for logistic regression?',
        options: ['Linear regression uses mean squared error as its cost function. If this is used for logistic regression, then it will be a non-convex function of its parameters. Gradient descent will converge into global minimum only if the function is convex.',
        'Linear regression uses mean squared error as its cost function. If this is used for logistic regression, then it will be a convex function of its parameters. Gradient descent will converge into global minimum only if the function is convex.',
        'Linear regression uses mean squared error as its cost function. If this is used for logistic regression, then it will be a non-convex function of its parameters. Gradient descent will converge into global minimum only if the function is non-convex.',
        'Linear regression uses mean squared error as its cost function. If this is used for logistic regression, then it will be a convex function of its parameters. Gradient descent will converge into global minimum only if the function is non-convex.'],
        answer: `Linear regression uses mean squared error as its cost function. If this is used for logistic regression, then it will be a non-convex function of its parameters. Gradient descent will converge into global minimum only if the function is convex.`
      },
      {
        id: 6,
        question: 'Is Logistic regression mainly used for Regression?',
        options: ['True','False'],
        answer: `False`
      },
      {
        id: 7,
        question: `Is it possible to design a logistic regression algorithm using a Neural Network Algorithm?`,
        options: ['True','False'],
        answer: `True`
      },
      {
        id: 8,
        question: 'How many different types of Logistic Regression?',
        options: ['2','3','4','5'],
        answer: '3'
      },
      {
        id: 9,
        question: `Which of the following are advantages of the logistic regression?`,
        options: ['Logistic Regression is very easy to understand',
        'It requires less training',
        'It performs well for simple datasets as well as when the data set is linearly separable',
        "All of the above"],
        answer: "All of the above"
      }
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
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-logistic-regression') }}
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
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-logistic-regression') }}
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

export default withRouter(LogisticTest);

