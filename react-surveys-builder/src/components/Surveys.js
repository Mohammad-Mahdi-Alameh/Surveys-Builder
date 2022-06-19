import React from "react";
import Survey from "./Survey";

const Surveys = ({ surveys , getQuestions}) => {
  return (
    <>
      {surveys.map((survey) => (
        <Survey
          key={survey.id}
          survey={survey}
          getQuestions={getQuestions}

         
        />
      ))}
    </>
  );
};

export default Surveys;
