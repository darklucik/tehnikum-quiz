import React from "react";
import { SaleSpan } from "../components/UI/sale";
import { ProgressBar, ProgressBar50 } from "../components/UI/indicatorsBar";
import { Button } from "../components/UI/Button";
import { QuestionInput } from "../components/UI/questions";

const StepTwo = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <div className="indicator">
            <div className="indicator__text">
             <SaleSpan />
              <span className="indicator__value">15%</span>
            </div>
            <ProgressBar50 />
          </div>
          <QuestionInput />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
