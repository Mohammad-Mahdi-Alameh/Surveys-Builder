import React from "react";
const Input = ({ type,placeholder,value,label,name}) => {
    
      return (<>
        <label>{label}</label>
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        className={"input"}
        // onChange={(e) => {
        //     setName(e.target.value);
        // }}
        />
        </>
      );
      
    };
export default Input;