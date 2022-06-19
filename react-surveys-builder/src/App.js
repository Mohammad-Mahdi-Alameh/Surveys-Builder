import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Surveys from "./components/Surveys";
function App() {
  const [surveys, setSurveys] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  
  //Getting all surveys from db
  const fetchSurveys = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_surveys");
      const data = await res.json();
      // console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
// Initialize all surveys into state from backend at component load
  useEffect(() => {
    const getSurveys = async () => {
      const serverSurveys = await fetchSurveys();
      setSurveys(serverSurveys);
    };
    getSurveys();
  }, []);
  
  //getting all questions of certain survey from db
  // const fetchQuestions = async () => {
  //   try {
  //     const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_questions/test");
  //     const data = await res.json();
  //     console.log(data);
  //     // return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   const getQuestions = async () => {
  //     const serverQuestions = await fetchQuestions();
  //     setQuestions(serverQuestions);
  //   };
  //   getQuestions();
  // }, []);

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
  //adding a question
   const addQuestion = async (question) => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/admin/add_question", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer "+localStorage.getItem("token"),
      },
      body: JSON.stringify(question),
    });
    const data = await res.json();
    setQuestions([...questions, data]);
  };
  //submitting an answer
   const addAnswer = async (answer) => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/admin/submit_answers", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(answer),
    });
    const data = await res.json();
    setAnswers([...answers, data]);
  };
  return (

    <div>
      {
        surveys.length > 0 ? (
          <Surveys surveys={surveys} />
        ) : (
          "No surveys to show!"
            )
      }
    </div>
  );
}

export default App;
