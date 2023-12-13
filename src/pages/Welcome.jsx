import React from "react";
import { Heading } from "../components/UI/Heading";
import { Button } from "../components/UI/Button";
import { AppInput } from "../components/UI/appInput";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading HeadingText="Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <AppInput inputType="text" inputLabel="Ваше имя"  id="username" inputPlaceholder="Ваш ответ" isRequired={true}/>
            <AppInput inputType="tel" inputLabel="Ваш номер" id="phone" inputPlaceholder="+998 9- --- -- --" isRequired={true}/>
            <Button buttonText="Далее" buttonType="submit" isDisabled={false}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
