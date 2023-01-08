import React, { Component } from "react";
// import { quizData } from '../shared/quizData.js';
import { Card, CardTitle, Button } from 'reactstrap';
import { withRouter } from "react-router-dom";
import '../../styles.css';

class CNNTest extends Component {
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
        question: `For which purpose Convolutional Neural Network is used?`,
        options: [`Mainly to process and analyse financial models, predicting future trends.`, `It is a multi purpose alghrithm that can be used for Supervised Learning.`, `It is a multi purpose alghorithm that can be used for Unsupervised Learning.`,'Mainly to process and analyse digital images, with some success cases involving processing voice and natural language.'],
        answer: `Mainly to process and analyse digital images, with some success cases involving processing voice and natural language.`
      },
      {
        id: 1,
        question: `What is the biggest advantage utilizing CNN?`,
        options: [`It has the highest accuracy among all algorithms that predicts images.`, `Little dependence on pre processing, decreasing the needs of human effort developing its functionalities.`, `It works well both for Supervised and Unsupervised Learning.`, `It is easy to understand and fast to implement.`],
        answer: `Little dependence on pre processing, decreasing the needs of human effort developing its functionalities.`
      },
      {
        id: 2,
        question: `Which answer explains better the Convolution?`,
        options: [`Detect key features in images, respecting their spatial boundaries.`, `It is a technique to standardize the dataset.`, `It is the first step to use CNN.`, `Understand the model features and selecting the best.`],
        answer: `Detect key features in images, respecting their spatial boundaries.`
      },
      {
        id: 3,
        question: `Which answer explains better the ReLU?`,
        options: [`Helps in the detection of features, increasing the non-linearity of the image, converting positive pixels to zero. This behavior allows you to detect variations of attributes.`, `Helps in the detect0ion of features, decreasing the non-linearity of the image, converting negative pixels to zero. This behavior allows you to detect variations of attributes.`,'It is used to find the best features considering their correlation.','A technique that allows you to find outliers.'],
        answer: `Helps in the detection of features, decreasing the non-linearity of the image, converting negative pixels to zero. This behavior allows you to detect variations of attributes.`
      },
      {
        id: 4,
        question: `Which answer explains better the Pooling?`,
        options: [`Creates a pool of data in order to improve the accuracy of the alghorithm predicting images.`, `It assists in the detection of features, even if they are distorted, in addition to decreasing the attribute sizes, resulting in decreased computational need. It is also very useful for extracting dominant attributes.`, `It assists in the detection of distorted features, in order to find dominant attributes.`, `Decrease the features size, in order to decrease the computional power that are needed.`],
        answer: `It assists in the detection of features, even if they are distorted, in addition to decreasing the attribute sizes, resulting in decreased computational need. It is also very useful for extracting dominant attributes.`
      },
      {
        id: 5,
        question: `Which answer explains better the Flattening?`,
        options: [`Once we have the pooled feature map, this component transforms the information into a vector. It's the input we need to get on with Artificial Neural Networks.`, `It is the last step of CNN.`, `Delete unnecessary features to make our dataset cleaner.`, `Transform images to vectors to make it easier to predict.`],
        answer: `Once we have the pooled feature map, this component transforms the information into a vector. It's the input we need to get on with Artificial Neural Networks.`
      },
      {
        id: 6,
        question: `Which answer explains better the Full Connection?`,
        options: [`It is a componente that connects diferents alghorithms in order to increase the accuracy.`, `It is the last step of CNN, where we connect the results of the earlier componentes to create a output.`, `Full Connection acts by placing different weights in each synapse in order to minimize errors. This step can be repeated until an expected result is achieved.`, `Full Connection acts by placing different weights in each synapse in order to minimize errors. No iteration is needed, since we can get the best results in our first attempt.`],
        answer: `Full Connection acts by placing different weights in each synapse in order to minimize errors. This step can be repeated until an expected result is achieved.`
      },
      {
        id: 7,
        question: `What are the Pooling Types? What are their characteristics?`,
        options: [`Max Pooling and Std Pooling. Max pooling returns the maximum value of the portion covered by the kernel, while Std Pooling returns the standard deviation of that portion.`, `Max Pooling and Minimum Pooling. Max pooling returns the maximum value of the portion covered by the kernel and suppresses the Noises, while Minimum pooling only returns the smallest value of that portion.`, `Max Pooling and Average Pooling. Max pooling returns the maximum value of the portion covered by the kernel, while Average pooling returns the measure of that portion and suppresses the Noises.`, `Max Pooling and Average Pooling. Max pooling returns the maximum value of the portion covered by the kernel and suppresses the Noises, while Average pooling only returns the measure of that portion.`],
        answer: `Max Pooling and Average Pooling. Max pooling returns the maximum value of the portion covered by the kernel and suppresses the Noises, while Average pooling only returns the measure of that portion.`
      },
      {
        id: 8,
        question: `What is the difference between CNN and ANN?`,
        options: [`CNN is a easiest way to use Neural Networks.`, `They complete eachother, so in order to use ANN, you need to start with CNN.`, `CNN uses a more simpler alghorithm than ANN.`, `CNN has one or more layers of convolution units, which receives its input from multiple units.`],
        answer: `CNN has one or more layers of convolution units, which receives its input from multiple units.`
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
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-cnn') }}
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
          <Button size="sm" onClick={() => { this.props.history.push('/aboutcourse-cnn') }}
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

export default withRouter(CNNTest);

