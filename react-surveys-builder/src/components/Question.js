// import React from "react";

// import Button from "./Button";
// import TextForm from "./TextForm";
// import Dropdown from "./Dropdown";

// const Question = ({}) => {
    
//       return (<>
//        <TextForm label={"Question Title: "}/>
//        <Dropdown label={"Type: "}/>

//        <Button text={"Create Question"} color={"green"}/>
//         </>
//       );
      
//     };
// export default Question;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
// import Radio from "./Radio";
import TextForm from "./TextForm";
const Question = ({ question }) => {
  // const [types, setTypes] = useState([]);

if (question.type_id === 1){
  return (<>
   <h3>
{question.title}
<TextForm label={"Answer : "}/>
</h3>
  </>)
}
if (question.type_id === 2){
let content = question.content.split(',');
  return (<>
   <h3>
{question.title}
<TextForm label={"Answer : "}/>
</h3>
  </>)
}
if (question.type_id === 1){
  return (<>
   <h3>
{question.title}
<TextForm label={"Answer : "}/>
</h3>
  </>)
}


  //   return (
//     <div
//     className={"survey"}
//     // onClick={() => {
//     //   // getQuestions(survey.name);
//     //   navigate("/questions?survey_name="+survey.name);


//     // }}
//     >
//       <h3>
//         {question.title}{" "}
//         {/* {question.content}{" "} */}
//        {question.type_id === 1 ?
//        <> <TextForm label={"Answer : "}/>
       
//       </>
//        :
//        { question.content}
//        <>Radio</>
//        }

        
//       </h3>
      

//     </div>
    
//   );
// };

}

export default Question;