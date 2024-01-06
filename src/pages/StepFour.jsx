import React, { useState } from "react";
import { ProgressIndicator } from "../components/UI/indicatorsBar";
import { LinkButton } from "../components/UI/linkbtn";
import { Heading } from "../components/UI/Heading";
import { Levelquestion } from "../components/UI/levelvariants";


const mockData = [
    {
      variantId: 'variant-1',
      variantText: '1',
      
    },
    {
      variantId: 'variant-2',
      variantText: '2',
      
    },
    {
      variantId: 'variant-3',
      variantText: '3',
      
    },
    {
      variantId: 'variant-4',
      variantText: '4',
      
    },
    {
      variantId: 'variant-5',
      variantText: '5',
    }
  ]


const StepFour = () => {

  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="indicator">
          <ProgressIndicator />
          </div>
          <div className="question">
            <Heading HeadingTag="h2" HeadingText="Вопрос номер 4" />
            <ul className="level-variants">
              {mockData.map((variant)=>(
                <Levelquestion 
                key={variant.variantId} 
                itemId={variant.variantId}
                text={variant.variantText}
                isSelected={selectedItem === variant.variantId}
                onClick={() => setSelectedItem(variant.variantId)} />
              )
              )}
            </ul>
            <LinkButton path="/thanks" isDisabled={!selectedItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
