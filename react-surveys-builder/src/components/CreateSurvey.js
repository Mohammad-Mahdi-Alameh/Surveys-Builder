import React from "react";
import { useState } from "react";

const CreateSurvey = ({ onAdd , checkToken }) => {
  let token = checkToken();
  console.log(token);
  // Initialize Input State
  const [title, setTitle] = useState("");
  //Add Data to Backend on Submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please add a title!");
      return;
    }
    onAdd({ title });
    setTitle("");

  };
  return (
    token !== false ?
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder={"Add Title"}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <input type={"submit"} value="Create Survey" className="btn btn-block" />
    </form>
    :
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Username</label>
        <input
          type="text"
          placeholder={"Enter Your Username"}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          />
        <label>Password</label>
        <input
          type="password"
          placeholder={"Enter Your Password"}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}/>
      </div>
      <input type={"submit"} value="Create Survey" className="btn btn-block" />
    </form>
  );
};

export default CreateSurvey;