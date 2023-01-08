import React, { Component } from "react";
// import { quizData } from '../shared/quizData.js';
import { Card, CardTitle, Button } from 'reactstrap';

import '../../styles.css';
import { withRouter } from "react-router-dom";

class InceptionResnetTest extends Component {
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
        question: `InceptionResnet-v2 is trained on?`,
        options: [`Imagenet`, `Googlenet`, `Alexnet`],
        answer: `Imagenet`
      },
      {
        id: 1,
        question: `What is the activation function used ?`,
        options: [`RELU`, `Softmax`, `Sigmoid`, `None of the above`],
        answer: `Softmax`
      },
      {
        id: 2,
        question: `Which pooling mode is used?`,
        options: [`Max pooling`, `Average pooling`, `Any`, `None of the mentioned`],
        answer: `Any`
      },
      {
        id: 3,
        question: `Is it a pre-trained network?`,
        options: [`Yes`, `No`],
        answer: `Yes`
      },
      {
        id: 4,
        question: `Why are residual blocks added to the inception network?`,
        options: [`Increase the depth`, `To improve the learning rate`, `Inception model gave very bad results`, `All of the mentioned`],
        answer: `Increase the depth`
      },
      {
        id: 5,
        question: `Can it be used to classify fake images from real ones?`,
        options: [`Yes`, `No`, `Maybe`],
        answer: `Yes`
      },
      {
        id: 6,
        question: `Can it be used to classify fake images from real ones?`,
        options: [`Yes`, `No`, `Maybe`],
        answer: `Yes`
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
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-resnet') }}
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
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-resnet') }}
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

export default withRouter( InceptionResnetTest );