import React from "react";
import { ProgressBar, ProgressBar75 } from "../components/UI/indicatorsBar";
import { SaleSpan } from "../components/UI/sale";
import { EmojiQuestion } from "../components/UI/questions";

const StepThree = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <SaleSpan />
              <span className="indicator__value">15%</span>
            </div>
            <ProgressBar75 />
          </div>
          <EmojiQuestion />
        </div>
      </div>
    </div>
  );
};

export default StepThree;
