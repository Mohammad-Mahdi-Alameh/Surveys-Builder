import React from "react";
const Input = ({ type,placeholder,value,label,name}) => {
   
      return (<div className={type}>
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        
        // onChange={(e) => {
          //     setName(e.target.value);
          // }}
          />
          <label>{label}</label>
        </div>
      );
      
    };
export default Input;