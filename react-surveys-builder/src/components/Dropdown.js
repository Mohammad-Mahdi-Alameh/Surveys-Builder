import React from "react";
const Dropdown = ({label}) => {
    
      return (<>
        <label>{label}</label>
        <select  name="type">
            <option value=""></option>
            <option value="Text">Text</option>
            <option value="MCQ">MCQ</option>
            <option value="Radio Button">Radio Button</option>
            <option value="Checkbox">Checkbox</option>
            <option value="Date/Time">Date/Time</option>
            <option value="Range">Range</option>
            <option value="Image">Image</option>
            </select>
        </>
      );
      
    };
export default Dropdown;