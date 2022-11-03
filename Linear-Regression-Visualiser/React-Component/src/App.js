import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "./runtime.js";
import notebook from "./main.js";
import "./style.css";
function InteractiveVisualizationOfLinearRegression() {
  const resetButtonRef = useRef();
  const viewOptionsRef = useRef();
  const rSquaredPlotRef = useRef();
  const regressionPlotRef = useRef();
  const widthRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "viewOptions") return new Inspector(viewOptionsRef.current);
      if (name === "rSquaredPlot")
        return new Inspector(rSquaredPlotRef.current);
      if (name === "regressionPlot")
        return new Inspector(regressionPlotRef.current);
      if (name === "resetButton") return new Inspector(resetButtonRef.current);
      if (name === "width") return new Inspector(widthRef.current);
      return ["animation"].includes(name);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <div className="container">
      <div ref={viewOptionsRef} />

      <div ref={rSquaredPlotRef} />
      <div ref={regressionPlotRef} />
      <div ref={widthRef} />
      <div ref={resetButtonRef} />
      <p>
        Credit: <a href="https://observablehq.com/">@observablehq</a>
      </p>
      <p>
        <h3>
          Improve your intuition about the behaviour of linear regression!
        </h3>
        <br /> Here are the interactions that are possible: <br />
        <ul>
          <li>
            <b>Click</b> anywhere on the plot to insert a new data point. Drag
            any data point to modify its position.
          </li>
          <li>
            <b>Drag</b> any data point to modify its position.
          </li>
          <li>
            <b>Click</b> any data point to remove it from the plot.
          </li>
        </ul>
        <br /> The best-fit line will adjust accordingly to minimize the
        mean-squared error on the current data points. The R^2 value is also
        displayed.
      </p>
    </div>
  );
}

export default InteractiveVisualizationOfLinearRegression;
