import React from "react";
import Question from "./Question";
const Questions = ({questions}) => {
    
    return (
        <>
          {questions.map((question) => (
            <Question
              key={question.id}
              question={question}
    
             
            />
          ))}
        </>
      );
    };
export default Questions;