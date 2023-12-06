import React from "react";
import { SaleSpan } from "../components/UI/sale";
import { ProgressBar } from "../components/UI/indicatorsBar";
import { OneQuestion } from "../components/UI/questions";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <SaleSpan /> 
              <span className="indicator__value">15%</span>
            </div>
            <ProgressBar />
          </div>
          <OneQuestion />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
