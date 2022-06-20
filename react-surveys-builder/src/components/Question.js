import React from "react";

import Button from "./Button";
import TextForm from "./TextForm";

const Question = ({}) => {
    
      return (<>
       <TextForm label={"Question Title: "}/>
       

       <Button text={"Add Answer Field"}/>
       <Button text={"New Question"}/>
        </>
      );
      
    };
export default Question;