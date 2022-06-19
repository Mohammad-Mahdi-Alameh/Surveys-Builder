import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
function App() {
  const [surveys, setSurveys] = useState([]);
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
  return (

    <>

    </>
  );
}

export default App;
