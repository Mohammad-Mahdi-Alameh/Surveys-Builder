import React from "react";
import Logo from "../assets/Logo.png";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Nav = ({ onCreateSurvey, showCreateSurvey, title }) => {
//   const location = useLocation();
  return (
    <header className="header">
        <div>
            <img src={Logo} alt=""/>
            <h1>{title}</h1>
        </div>
            
        {/* {location.pathname === "/" && ( */}
        <Button
          color={showCreateSurvey ? "red" : "green"}
          text={showCreateSurvey ? "Close" : "Create Survey"}
          onClick={onCreateSurvey}
        />
      {/* )} */}
    </header>
  );
};

export default Nav;
