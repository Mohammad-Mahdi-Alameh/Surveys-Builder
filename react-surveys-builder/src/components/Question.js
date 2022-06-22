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
const Question = ({ question , order}) => {
  const [multiple, setmultiple] = useState([]);
  let string="";
  let arr=[];

if (question.type_id === 1){
  return (<>

   <h2>
   {order +" ) "}
  {question.title}
<Input  placeholder={"Enter your answer "} type={"text"}/>
</h2>
  </>)  
}
if (question.type_id === 2){
let contents = question.content.split(',');
for(let i=0;i<contents.length;i++){
  arr.push(  <Input type={'radio'} name={question.title} label={contents[i]}/> );
}
return (<><h2>{order +" ) "}{question.title }</h2>{arr}</>)
}

if (question.type_id === 1){
  return (<>
   <h3>
{question.title}
<Input label={"Answer : "}/>
</h3>
  </>)
}

if (question.type_id === 3){
let contents = question.content.split(',');
for(let i=0;i<contents.length;i++){
  arr.push(  <Input type={'checkbox'} name={question.title} label={contents[i]}/> );
}
return (<><h2>{order +" ) "}{question.title }</h2>{arr}</>)
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