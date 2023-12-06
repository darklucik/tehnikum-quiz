import React from "react";
import { Heading } from "../components/UI/Heading";
import { Button } from "../components/UI/Button";
import { AppInput } from "../components/UI/appInput";
import StepTwo from "./StepTwo";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading />
          <form className="welcome__form">
            <AppInput inputLabel="Ваше имя" />
            <AppInput inputLabel="Ваш номер" />
            <Button />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
