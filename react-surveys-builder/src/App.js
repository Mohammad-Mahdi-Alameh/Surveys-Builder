import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Surveys from "./components/Surveys";
import Nav from "./components/Nav";
import CreateSurvey from "./components/CreateSurvey";

function App() {
  const [surveys, setSurveys] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [showCreateSurvey, setShowCreateSurvey] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  
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
   //Checking if the token exists
   const checkToken =  () => {
    try {
      let token = localStorage.getItem("token");
      if ( token )
          return true;
      else
          return false; 
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
  const fetchQuestions = async(survey_name) => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_questions/"+survey_name);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   const getQuestions = async () => {
  //     const serverQuestions = await fetchQuestions();
  //     setQuestions(serverQuestions);
  //   };
  //   getQuestions();
  // }, []);

    //adding a survey
    const login = async (username_pass) => {
      const res = await fetch("http://127.0.0.1:8000/api/v1/admin/login", {
        method: "POST",
     
        body: username_pass,
      });
      const data = await res.json();
      console.log(data.success);
      if(data.success === true){
          localStorage.setItem("token",data.token);
          alert("Hi Admin !");
      }else
          alert("Wrong username or Password !");
        
      }


  //adding a survey
   const addSurvey = async (survey) => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/admin/add_survey", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer "+localStorage.getItem("token"),
      },
      body: survey,
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
  <> 
    <Nav
          // title = {"Forms"}
          onCreateSurvey={() => {
            setShowCreateSurvey(!showCreateSurvey);
          }}
          // onLogin={() => {
          //   setShowLogin(!showLogin);
          // }}
          // checkToken={checkToken}
          showCreateSurvey={showCreateSurvey}
          // showLogin={showLogin}
        />
           { <div>{showCreateSurvey && <CreateSurvey login={login} checkToken={checkToken} createSurvey={addSurvey}/>}</div> }
    <div>
      {
        surveys.length > 0 ? (
          <Surveys surveys={surveys} getQuestions={fetchQuestions} />
          ) : (
            ""
            )
      }
    </div>
  </>

  );
};

export default App;
