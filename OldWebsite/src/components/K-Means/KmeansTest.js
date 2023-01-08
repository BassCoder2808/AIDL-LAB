import React, { Component } from "react";
// import { quizData } from '../shared/quizData.js';
import { Card, CardTitle, Button } from 'reactstrap';
import { withRouter } from "react-router-dom";
import '../../styles.css';

class KmeansTest extends Component {
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
        question: `As an unsupervised algorithm, which of the following is not needed in K-Means?
    `     ,
        options: ['features for train data','features for train data','labels for train data','labels for test data',''],
        answer: `labels for train data`
      },
      {
        id: 1,
        question: `K-means is a type of ______ learning algorithm`,
        options: ['reinforcement','lazy','supervised','recurrent'],
        answer: `lazy`
      },
      {
        id: 2,
        question: `The initial assignments of centroids can affect the clustering`,
        options: [`True`, `False`],
        answer: `True`
      },
      {
        id: 3,
        question: 'Which of the following is required by K-means clustering?'
        ,
            options: ['defined distance metric','number of clusters','initial guess as to cluster centroids','all of the mentioned'],
            answer: `all of the mentioned`
      },
      {
        id: 4,
        question: 'The centroids in the K-means algorithm may not be any observed data points.',
        options: ['True','False'],
        answer: `True`
      },
      {
        id: 5,
        question: 'The K-means algorithm can detect non-convex clusters.',
        options: ['True','False'],
        answer: `False`
      },
      {
        id: 6,
        question: 'Clustering should be done on samples of 300 or more.',
        options: ['True','False'],
        answer: `False`
      },
      {
        id: 7,
        question: `Which of the following steps are repeatedly carried out in its inner-loop?`,
        options: ['Assign each point to its nearest cluster',
       'Test on the cross-validation set',
        'Update the cluster centroids based the current assignment',    
        'Using the elbow method to choose K'],
        answer: `Assign each point to its nearest cluster`
      },
      {
        id: 8,
        question: 'The most commonly used measure of similarity is the _____ or its square.',
        options: ['euclidean distance','city-block distance','Chebychev’s distance','Manhattan distance'],
        answer: 'euclidean distance'
      },
      {
        id: 9,
        question: `In which case can a clustering algorithm work?`,
        options: ['Given sales data from a large number of products in a supermarket, estimate future sales for each of these products.',
        'Predict the sentiment in a tweet as positive or negative',
        "From the user's usage patterns on a website, identify different user groups.",
        "Given historical weather records, predict if tomorrow's weather will be sunny or rainy."],
        answer: "From the user's usage patterns on a website, identify different user groups."
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
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-kmeans') }}
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
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-kmeans') }}
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

export default withRouter(KmeansTest);

