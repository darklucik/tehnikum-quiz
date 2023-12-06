import React from "react";
import { ProgressBar75 } from "../components/UI/indicatorsBar";
import { EmojiQuestion2 } from "../components/UI/questions";

const StepFour = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <ProgressBar75 />
          </div>
          <EmojiQuestion2 />
        </div>
      </div>
    </div>
  );
};

export default StepFour;
