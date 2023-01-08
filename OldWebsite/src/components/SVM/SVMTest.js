import React, { Component } from "react";
// import { quizData } from '../shared/quizData.js';
import { Card, CardTitle, Button } from 'reactstrap';

import '../../styles.css';
import { withRouter } from "react-router-dom";

class SVMTest extends Component {
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
        question: `What does generalization error mean?`,
        options: [`The accuracy with which SVM can predict outcomes for new, unseen data`, `The distance between hyperplane and vectors`, `The amount of error in the SVM`],
        answer: `The accuracy with which SVM can predict outcomes for new, unseen data`
      },
      {
        id: 1,
        question: `The effectiveness of SVM depends on?`,
        options: [`Kernel parameters`, `Kernel selection`, `There is no feedback of signal at nay stage`, `Soft Margin Parameter`, `All of the above`],
        answer: `All of the above`
      },
      {
        id: 2,
        question: `Support vectors are the data points that lie closest to the decision surface.`,
        options: [`False`, `True`],
        answer: `True`
      },
      {
        id: 3,
        question: `You are given a labeled binary classification data set with N data points and D features. Suppose that N < D. In training an SVM on this data set, which of the following kernels is likely to be most appropriate?`,
        options: [`Linear kernel`, `Quadratic kernel`, `RBF Kernel`, `Higher order polynomial kernel`],
        answer: `Linear kernel`
      },
      {
        id: 4,
        question: `A support vector machine computes P(y|x).`,
        options: [`True`, `False`],
        answer: `False`
      },
      {
        id: 5,
        question: `Which of the following can only be used when training data are linearly separable?`,
        options: [`Linear hard- margin SVM`, `Linear logistic regression`, `Linear soft margin SVM`],
        answer: `Linear hard- margin SVM`
      },
      {
        id: 6,
        question: `The SVM’s are less effective when:`,
        options: [`The data is clean and ready to use`, `The data is noisy and contains overlapping points`, `The data is linearly separable`],
        answer: `The data is noisy and contains overlapping points`
      },
      {
        id: 7,
        question: `Suppose you are using RBF kernel in SVM with high Gamma value. What does this signify?`,
        options: [`The model would consider only the points close to the hyperplane for modeling`, `The model would consider all the points for modeling`, `The model would consider far off points close to the hyperplane for modeling`],
        answer: `The model would consider only the points close to the hyperplane for modeling`
      },
      {
        id: 8,
        question: `The cost parameter in the SVM means`,
        options: [`The kernel to be used`, `The validations to be made`, `The tradeoff between misclassification and simplicity of the model`],
        answer: `The tradeoff between misclassification and simplicity of the model`
      },
      {
        id: 9,
        question: `Taking into consideration all the features of your dataset, you achieve 100 % accuracy on 100% accuracy on the training set but 60% accuracy on validation data, what should I look for?`,
        options: [`Underfitting`, `Overfitting`, `The model is proper`],
        answer: `Overfitting`
      },
      {
        id: 10,
        question: `Which of the following options would you more likely to consider iterating SVM next time?`,
        options: [`To reduce the features`, `To calculate more variables`, `To decrease data points`, `To increase data points`],
        answer: `To calculate more variables`
      },
      {
        id: 11,
        question: `Suppose you have the same distribution of classes in the data. Now, say for training 1 time in one vs all setting the SVM is taking 10 second. How many seconds would it require to train one-vs-all method end to end?`,
        options: [`70`, `20`, `40`, `60`, `100`],
        answer: `40`
      },
      {
        id: 12,
        question: `What is/are true about kernel in SVM?1. Kernel function map low dimensional data to high dimensional space
        2. It’s a similarity function`,
        options: [`1`, `2`, `Both`, `None`],
        answer: `Both`
      },
      {
        id: 13,
        question: `When the C parameter is set to infinite, which of the following holds true?`,
        options: [`The optimal hyperplane if exists, will be the one that completely separates the data`, `The soft-margin classifier will separate the data`, `None`],
        answer: `The optimal hyperplane if exists, will be the one that completely separates the data`
      },
      {
        id: 14,
        question: `What does hard margin mean in SVM?`,
        options: [`High error in classification allowed by SVM`, `Low error in classification allowed by SVM`, `None`],
        answer: `Low error in classification allowed by SVM`
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
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-svm') }}
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
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-svm') }}
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

export default withRouter(SVMTest);

