import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route,useNavigate} from "react-router-dom";
import Surveys from "./components/Surveys";
import Nav from "./components/Nav";
import CreateQuestions from "./components/CreateQuestions";
import CreateSurvey from "./components/CreateSurvey";
import Questions from "./components/Questions";

function App() {
  const [surveys, setSurveys] = useState([]);
  const [questions, setQuestions] = useState([]);
  // const [surveyQuestions, setSurveyQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [showCreateSurvey, setShowCreateSurvey] = useState(false);

  const [showLogout, setShowLogout] = useState(false);
  
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
  // const fetchQuestions = async(survey_name) => {
  //   try {
  //     const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_questions/"+survey_name);
  //     const data = await res.json();
  //     console.log(data);
  //     setSurveyQuestions([...surveyQuestions, data])
  //     return data;
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

    
    const login = async (username_pass) => {
      const res = await fetch("http://127.0.0.1:8000/api/v1/admin/login", {
        method: "POST",
     
        body: username_pass,
      });
      const data = await res.json();
      console.log(data.success);
      if(data.success === true){
          localStorage.setItem("token",data.token);
          // alert("Hi Admin !");
          
      }else
          alert("Wrong username or Password !");
        
      }


   const logout = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/admin/logout", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
    });
    localStorage.removeItem("token");
    window.location.reload(false);
  };
  //adding a survey
   const addSurvey = async (survey) => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/admin/create_survey", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
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
    <BrowserRouter> 
      <div className="container">
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
            logout={logout}
            // showLogin={showLogin}
            />
      
    <Routes>
           <Route path="/" element={<>
            {showCreateSurvey && <CreateSurvey login={login} checkToken={checkToken} createSurvey={addSurvey} setShowCreateSurvey={setShowCreateSurvey} showCreateSurvey={showCreateSurvey} />}

     
         {
           
           surveys.length > 0 ? (
             <Surveys surveys={surveys}  />
                ) : (
                  ""
                  )
                }</>}></Route>

          <Route
           path="/create_survey's_questions"
           element={
            <CreateQuestions /> }

          ></Route>

          <Route
           path="/questions"
           element={
            <Questions /> }
            // <Questions questions={surveyQuestions}/> }

          ></Route>

      </Routes>
    </div>
  </BrowserRouter>

  );
};

export default App;
