import React, { Component } from "react";
import HomePage from "./HomePageComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Experiments from "./ExperimentsComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { EXPS } from "../shared/exp.js";

import AboutYolo from "./Yolo/AboutYoloComponent";
import Simulation from "./Yolo/YoloSimulationComponent";
import Test from "./Yolo/YoloTestComponent";

import AboutCNN from "./CNN/AboutCNN";
import CNNExplainerComponent from "./CNN/CNNExplainerComponent";
import CNNComponent from "./CNN/CNNComponent";
import CNNTest from "./CNN/CNNTest";

import AboutBackPropagation from "./BackPropagation/AboutBackPropagation";
import BackPropagationSimulation from "./BackPropagation/BackPropagationSimulation";
import BackPropagationTest from "./BackPropagation/BackPropagationTest";

import AboutPosenet from "./PoseNet/AboutPosenet";
import PosenetSimulation from "./PoseNet/PoseNetSimulation";
import PoseNetTest from "./PoseNet/PosenetTest";

import AboutResNet from "./InceptionResnet/AboutInceptionResnet";
import ResNetSimulation from "./InceptionResnet/InceptionResnetSimulation";
import ResNetTest from "./InceptionResnet/InceptionResnetTest";

import AboutKmeans from "./K-Means/AboutKmeans";
import KmeansSimulation from "./K-Means/KmeansSimulation";
import KmeansTest from "./K-Means/KmeansTest";

import AboutSVM from "./SVM/AboutSVM";
import SVMSimulation from "./SVM/SVMSimulation";
import SVMTest from "./SVM/SVMTest";

import AboutkNN from "./KNN/AboutkNN";
import KNNSimulation from "./KNN/kNNSimulation";
import KNNTest from "./KNN/kNNTest";

import AboutOCR from "./OCR/AboutOCR";
import OCRSimulation from "./OCR/OCRSimulation";
import OCRTest from "./OCR/OCRTest";

import AboutLin from "./Linear&MultiRegression/AboutLinear";
import LinearTest from "./Linear&MultiRegression/LinearTest";
import LinearSimulation from "./Linear&MultiRegression/LinearSimulation";

import AboutLogistic from "./LogisticRegression/AboutLogistic";
import LogisticSimulation from "./LogisticRegression/LogisticSimulation";
import LogisticTest from "./LogisticRegression/LogisticTest";

import AboutRandomForest from "./RandomForest/AboutRandomForest";
import RandomForestSimulation from "./RandomForest/RandomForestSimulation";
import RandomForestTest from "./RandomForest/RandomForestTest";
import AboutAutoEncoder from "./Autoencoder/AboutAutoEncoder";
import AutoEncoderSimulation from "./Autoencoder/AutoEncoderSimulation";
import AutoEncoderTest from "./Autoencoder/AutoEncoderTest";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exps: EXPS,
    };

    console.log("YOLO", this.props.history);
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/experiments"
            component={() => <Experiments exps={this.state.exps} />}
          />

          <Route
            exact
            path="/aboutcourse-yolo"
            component={() => <AboutYolo />}
          />
          <Route
            exact
            path="/simulation-yolo"
            component={() => <Simulation />}
          />
          <Route exact path="/test-yolo" component={Test} />

          <Route
            exact
            path="/aboutcourse-posenet"
            component={() => <AboutPosenet />}
          />
          <Route
            exact
            path="/simulation-posenet"
            component={() => <PosenetSimulation />}
          />
          <Route exact path="/test-posenet" component={() => <PoseNetTest />} />

          <Route
            exact
            path="/simulation-backpropagation"
            component={() => <BackPropagationSimulation />}
          />
          <Route
            exact
            path="/aboutcourse-backpropagation"
            component={() => <AboutBackPropagation />}
          />
          <Route
            exact
            path="/test-backpropagation"
            component={() => <BackPropagationTest />}
          />

          <Route exact path="/aboutcourse-cnn" component={() => <AboutCNN />} />
          <Route
            exact
            path="/simulation-cnn"
            component={() => <CNNComponent />}
          />
          <Route
            exact
            path="/explainer-cnn-with-simulation"
            component={() => <CNNExplainerComponent />}
          />
          <Route exact path="/test-cnn" component={() => <CNNTest />} />

          <Route
            exact
            path="/aboutcourse-resnet"
            component={() => <AboutResNet />}
          />
          <Route
            exact
            path="/simulation-resnet"
            component={() => <ResNetSimulation />}
          />
          <Route exact path="/test-resnet" component={() => <ResNetTest />} />

          <Route exact path="/aboutcourse-ocr" component={() => <AboutOCR />} />
          <Route
            exact
            path="/simulation-ocr"
            component={() => <OCRSimulation />}
          />
          <Route exact path="/test-ocr" component={() => <OCRTest />} />

          <Route
            exact
            path="/aboutcourse-kmeans"
            component={() => <AboutKmeans />}
          />
          <Route
            exact
            path="/simulation-kmeans"
            component={() => <KmeansSimulation />}
          />
          <Route exact path="/test-kmeans" component={() => <KmeansTest />} />

          <Route exact path="/aboutcourse-svm" component={() => <AboutSVM />} />
          <Route
            exact
            path="/simulation-svm"
            component={() => <SVMSimulation />}
          />
          <Route exact path="/test-svm" component={() => <SVMTest />} />

          <Route exact path="/aboutcourse-knn" component={() => <AboutkNN />} />
          <Route
            exact
            path="/simulation-knn"
            component={() => <KNNSimulation />}
          />
          <Route exact path="/test-knn" component={() => <KNNTest />} />

          <Route
            exact
            path="/aboutcourse-linearreg"
            component={() => <AboutLin />}
          />
          <Route
            exact
            path="/simulation-linearreg"
            component={() => <LinearSimulation />}
          />
          <Route
            exact
            path="/test-linearreg"
            component={() => <LinearTest />}
          />

          <Route
            exact
            path="/aboutcourse-logisticreg"
            component={() => <AboutLogistic />}
          />
          <Route
            exact
            path="/simulation-logisticreg"
            component={() => <LogisticSimulation />}
          />
          <Route
            exact
            path="/test-logisticreg"
            component={() => <LogisticTest />}
          />

          {/* <Route
            exact
            path="/aboutcourse-semantic"
            component={() => <AboutSemantic />}
          />
          <Route
            exact
            path="/simulation-semantic"
            component={() => <SemanticSimulation />}
          />
          <Route
            exact
            path="/test-semantic"
            component={() => <LogisticTest />}
          /> */}
          <Route
            exact
            path="/aboutcourse-randomforest"
            component={() => <AboutRandomForest />}
          />
          <Route
            exact
            path="/simulation-randomforest"
            component={() => <RandomForestSimulation />}
          />
          <Route
            exact
            path="/test-randomforest"
            component={() => <RandomForestTest />}
          />

          <Route
            exact
            path="/aboutcourse-autoencoder"
            component={() => <AboutAutoEncoder />}
          />
          <Route
            exact
            path="/simulation-autoencoder"
            component={() => <AutoEncoderSimulation />}
          />
          <Route
            exact
            path="/test-autoencoder"
            component={() => <AutoEncoderTest />}
          />

          <Redirect to="/home" />
        </Switch>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Main;
