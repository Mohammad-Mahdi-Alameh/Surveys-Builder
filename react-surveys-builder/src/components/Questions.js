import Question from "./Question";
import Button from "./Button";
import React, { useState, useEffect } from "react";


const Questions = ({}) => {
  const [surveyQuestions, setsurveyQuestions] = useState([]);
  let urlString = window.location.href;
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    for (var pair of queryString.entries()) {
        var survey_name=pair[1]
    }
  const fetchQuestions = async() => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_questions/"+survey_name);
      const data = await res.json();
      console.log(data);
      setsurveyQuestions([...surveyQuestions, data])
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const getQuestions = async () => {
      const serverQuestions = await fetchQuestions();
      setsurveyQuestions(serverQuestions);
      // return data;
    };
    getQuestions();
    
    
  }, [Questions]);
    

  if(surveyQuestions.length > 0 ){
    var i=1;
    return (
        <>
          {surveyQuestions.map((surveyQuestion) => (
        <Question
          key={surveyQuestion.id}
          order={i++}
          question={surveyQuestion}


         
        />
        
        
        ))} <Button text={"Submit"} color={"green"}/>
        </>
        
        );
        }}
        
export default Questions;