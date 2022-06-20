import React, { useState } from "react";

const Survey = ({ survey , getQuestions }) => {
  return (
    <div
    className={"survey"}
    onClick={() => {
        getQuestions(survey.name);
    }}
    >
      <h3>
        {survey.name}{" "}
        
      </h3>
    </div>
  );
};

export default Survey;
