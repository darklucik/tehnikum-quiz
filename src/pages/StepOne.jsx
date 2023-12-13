import React from "react";
import { SaleSpan } from "../components/UI/sale";
import { ProgressBar } from "../components/UI/indicatorsBar";
import { AppInput } from "../components/UI/appInput";
import { Button } from "../components/UI/Button";

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
          <AppInput inputType="text" inputLabel="1.  Занимательный вопрос"  name="answer" inputPlaceholder="Ваш ответ" isRequired={true}/>
          <Button buttonText="Далее" buttonType="submit" isDisabled={false}/>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
