import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
function App() {
  const [surveys, setSurveys] = useState([]);
  const [questions, setQuestions] = useState([]);

  //Getting all surveys from db
  const fetchSurveys = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_surveys");
      const data = await res.json();
      console.log(data);
      // return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getSurveys = async () => {
      const serverSurveys = await fetchSurveys();
      setSurveys(serverSurveys);
    };
    getSurveys();
  }, []);
  
  //getting all questions of certain survey from db
  const fetchQuestions = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_questions/test");
      const data = await res.json();
      console.log(data);
      // return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getQuestions = async () => {
      const serverQuestions = await fetchQuestions();
      setQuestions(serverQuestions);
    };
    getQuestions();
  }, []);

  //adding a survey
   const addSurvey = async (survey) => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/admin/add_survey", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer "+localStorage.getItem("token"),
      },
      body: JSON.stringify(survey),
    });
    const data = await res.json();
    setSurveys([...surveys, data]);
  };
 
  return (

    <>

    </>
  );
}

export default App;
