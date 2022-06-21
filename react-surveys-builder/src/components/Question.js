// import React from "react";

// import Button from "./Button";
// import TextForm from "./TextForm";
// import Dropdown from "./Dropdown";

// const Question = ({}) => {
    
//       return (<>
//        <TextForm label={"Question Title: "}/>
//        <Dropdown label={"Type: "}/>

//        <Button text={"Create Question"} color={"green"}/>
//         </>
//       );
      
//     };
// export default Question;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Question = ({ question }) => {
  return (
    <div
    className={"survey"}
    // onClick={() => {
    //   // getQuestions(survey.name);
    //   navigate("/questions?survey_name="+survey.name);


    // }}
    >
      <h3>
        {question.title}{" "}
        
      </h3>
    </div>
  );
};

export default Question;