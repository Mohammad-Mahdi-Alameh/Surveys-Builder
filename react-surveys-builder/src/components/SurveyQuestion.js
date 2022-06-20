import React from "react";

import Button from "./Button";
import TextForm from "./TextForm";
import Dropdown from "./Dropdown";

const SurveyQuestion = ({question}) => {
    
  let navigate = useNavigate();
  return (
    <div
    className={"survey"}
    
    >
      <h3>
        {question.name}{" "}
        
      </h3>
    </div>
  );
};
export default SurveyQuestion;