import React from "react";
const Dropdown = ({label,options,question_title}) => {
  let arr =[];
    if(options){

for(let i=0;i<options.length;i++){
  arr.push(<option value ={options[i]} >{options[i]}</option>);
}
return(<><select  name={question_title} >
  <option value=""></option>{arr}</select></>)

    }
      return (<>
        <label>{label}</label>
        <select  name="type">
            <option value=""></option>
            <option value="Text">Text</option>
            <option value="Radio Button">Radio Button (MCQ)</option>
            {/* <option value="MCQ">MCQ</option> */}
            <option value="Checkbox">Checkbox(es)</option>
            {/* <option value="Date/Time">Date/Time</option>
            <option value="Range">Range</option>
            <option value="Image">Image</option> */}
            </select>
        </>
      );
          
    };
export default Dropdown;