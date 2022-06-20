import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Survey = ({ survey , getQuestions }) => {
  let navigate = useNavigate();
  return (
    <div
    className={"survey"}
    onClick={() => {
      getQuestions(survey.name);
      navigate("/questions");


    }}
    >
      <h3>
        {survey.name}{" "}
        
      </h3>
    </div>
  );
};

export default Survey;
