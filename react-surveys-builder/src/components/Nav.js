import React from "react";
import Logo from "../assets/Logo.png";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Nav = ({ onCreateSurvey, showCreateSurvey, logout,title }) => {
const location = useLocation();

  return (
    <header className="header">
        <div className="icon">
            <img src={Logo} alt=""/>
            <h1>Surveys Builder</h1>
        </div>
        
        <div className="icon">
        {location.pathname === "/" && (
        <Button
          color={showCreateSurvey ? "red" : "green"}
          text={showCreateSurvey ? "Close" : "Create Survey"}
          onClick={onCreateSurvey}
        />
       )}
        {location.pathname === "/" && (
        <Button
          color={"red" }
          text={"Logout"}
          onClick={logout}
        />
       )}</div>
       {location.pathname === "/create_survey's_questions" && (
        <Button
          color={"red" }
          text={"Logout"}
          onClick={logout}
        />
       )}
    </header>
  );
};

export default Nav;
