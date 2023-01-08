import React, { Component } from "react";
// import { quizData } from '../shared/quizData.js';
import { Card, CardTitle, Button } from 'reactstrap';
import { withRouter } from "react-router-dom";
import '../../styles.css';

class KNNTest extends Component {
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
        question: `Does kNN algorithm do more computation on test time or train time?`,
        options: [`Train time`, `Test time`, `Cannot be determined`],
        answer: `Test time`
      },
      {
        id: 1,
        question: `What can be kNN algorithm used for?`,
        options: [`Classification`, `Regression`, `Both classification and regression`, `None of these`],
        answer: `Both classification and regression`
      },
      {
        id: 2,
        question: `What can you say about bias in kNN?`,
        options: [`Bias increases as k increases`, `Bias increases as k decreases`, `None of the mentioned`],
        answer: `Bias increases as k increases`
      },
      {
        id: 3,
        question: `What can you say about variance in kNN?`,
        options: [`Variance increases as k increases`, `Variance increases as k decreases`, `None of the mentioned`],
        answer: `Variance increases as k decreases`
      },
      {
        id: 4,
        question: `What would you do if you find noise in data, whilst using kNN?`,
        options: [`Increase the value of k`, `Decrease the value of k`, `Noise does not depend on k value`, `None of the mentioned`],
        answer: `Increase the value of k`
      },
      {
        id: 5,
        question: `Compare the time taken by: 1-NN, 2-NN, 3-NN`,
        options: [`1-NN > 2-NN > 3-NN`, `1-NN < 2-NN < 3-NN`, `1-NN ~ 2-NN ~ 3-NN`, `None of the mentioned`],
        answer: `1-NN ~ 2-NN ~ 3-NN`
      },
      {
        id: 6,
        question: `Explicit training step is not required in kNN`,
        options: [`True`, `False`],
        answer: `True`
      },
      {
        id: 7,
        question: `Can 1-NN classifier be used to construct 2-NN classifier`,
        options: [`Yes`, `No`, `Maybe`],
        answer: `Yes`
      },
      {
        id: 8,
        question: `Your kNN classifier gives very high accuracy on training data but is not at all accurate on client data. What is the reason?`,
        options: [`Model is probably overfitted`, `Model is probably underfitted`, `Cannot determine`],
        answer: `Model is probably overfitted`
      },
      {
        id: 9,
        question: `Which of the following multiclass classifier can directly achieve multi-class classification? (Without help of binary classifier)`,
        options: [`Decision Trees`, `Naive Bayes`, `kNN`, `SVM`],
        answer: `kNN`
      },
      {
        id: 10,
        question: `Which one of the following is true about kNN classifier`,
        options: [`Decision boundary is determined locally by nearest neighbour`, `Also known as: Case-based learning`, `1-NN is not robust`],
        answer: `Decision boundary is determined locally by nearest neighbour`
      },
      {
        id: 11,
        question: `k in kNN signifies?`,
        options: [`Number of nearest neighbours to consider`, `Number of classes`, `Both classes and nearest neighbours`],
        answer: `Number of nearest neighbours to consider`
      },
      {
        id: 12,
        question: `What value of k is preferred in kNN algorithm?`,
        options: [`Odd: So that there are no ties in voting`, `Doesnt matter`, `Even`],
        answer: `Odd: So that there are no ties in voting`
      },
      {
        id: 13,
        question: `kNN classification algorithm is also known as:`,
        options: [`Memory-based learner`, `Case-based learner`, `Lazy learner`],
        answer: `Lazy learner`
      },
      {
        id: 14,
        question: `Which one of the following istrue for kNN as well as Naive Bayes classifier`,
        options: [`Comparatively, kNN has higher variance and lower bias`, `Comparatively, Naive Bayes has lower variance and higher bias`, `Naive Bayes is faster than kNN classifier`, 'Training dataset is necessary for both classifiers'],
        answer: `Comparatively, kNN has higher variance and lower bias`
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
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-knn') }}
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
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-knn') }}
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

export default withRouter(KNNTest);

