import React from "react";

import Button from "./Button";
import TextForm from "./TextForm";
import Dropdown from "./Dropdown";

const Question = ({}) => {
    
      return (<>
       <TextForm label={"Question Title: "}/>
       <Dropdown label={"Type: "}/>

       <Button text={"Create Question"} color={"green"}/>
        </>
      );
      
    };
export default Question;