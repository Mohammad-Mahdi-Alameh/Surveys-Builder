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
import Radio from "./Radio";
import Input from "./Input";
const Question = ({ question }) => {
  const [multiple, setmultiple] = useState([]);
  let string="";
  let arr=[];

if (question.type_id === 1){
  return (<>
   <h3>
{question.title}
<Input label={"Answer : "} placeholder={"Enter your answer "}
type={"text"}/>
</h3>
  </>)  
}
if (question.type_id === 2){
let contents = question.content.split(',');
// const fields = contents.map((content) =>
//   return (<h3>{question.title} <Input type={'radio'}/><label>{content[i]}</label></h3>);
// );
// for(let i=0;i<content.length;i++){
//   string  = ""+<h3>{question.title} <Input type={'radio'}/><label>{content[i]}</label></h3>;
//   arr.push(string);
for(let i=0;i<contents.length;i++){
  arr.push(  <h3> <Input type={'radio'} name={question.title} label={contents[i]}/></h3> );

  
// }
// return (<>{arr.every}</>);
}
return (<>{question.title}{arr}</>)
}
if (question.type_id === 1){
  return (<>
   <h3>
{question.title}
<Input label={"Answer : "}/>
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