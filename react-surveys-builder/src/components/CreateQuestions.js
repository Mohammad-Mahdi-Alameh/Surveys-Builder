import React from "react";
const CreateQuestions = ({ }) => {
    let urlString = window.location.href;
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    for (var pair of queryString.entries()) {
        var survey_name=pair[1]
    }
      return (
       <div>Customize your questions for the  {survey_name} survey </div>
      );
      
    };
export default CreateQuestions;