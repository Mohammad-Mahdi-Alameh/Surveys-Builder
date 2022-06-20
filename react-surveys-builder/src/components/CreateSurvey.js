import React from "react";
import { useState } from "react";

const CreateSurvey = ({ login , checkToken , createSurvey }) => {
  let token = checkToken();
  // console.log(token);
  // Initialize Input State
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //Add Data to Backend on Submit
  const onLogin = (e) => {
    e.preventDefault();
    if ( !username || !password) {
      alert("Please fill missing fields !");
      return;
    }
    let login_data = new FormData();
    login_data.append("username",username);
    login_data.append("password",password);
    login(login_data);
    setUsername("");
    setPassword("");

  };
  const onCreateSurvey = (e) => {
    e.preventDefault();
    if ( !name) {
      alert("Please fill missing fields !");
      return;
    }
    let survey_data= new FormData();
    survey_data.append("name",name);
    createSurvey(survey_data);
    setName("");};

  return (
    token === false ?
    <form className="add-form" onSubmit={onLogin}>
    <div className="form-control">
      <label>Username</label>
      <input
        type="text"
        placeholder={"Enter Your Username"}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        />
      <label>Password</label>
      <input
        type="password"
        placeholder={"Enter Your Password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}/>
    </div>
    <input type={"submit"} value="Login" className="btn btn-block" />
  </form>
   
    :
    <form className="add-form" onSubmit={onCreateSurvey}>
    <div className="form-control">
      <label>Survey Name</label>
      <input
        type="text"
        placeholder={"Add Name"}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
    <input type={"submit"} value="Create Survey" className="btn btn-block" />
  </form>
  );
};

export default CreateSurvey;