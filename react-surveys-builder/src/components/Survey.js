import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Survey = ({ survey}) => {
  let navigate = useNavigate();
  return (
    <div
    className={"survey"}
    onClick={() => {
      // getQuestions(survey.name);
      navigate("/questions?survey_name="+survey.name);


    }}
    >
      <h3>
        {survey.name}{" "}
        
      </h3>
    </div>
  );
};

export default Survey;
