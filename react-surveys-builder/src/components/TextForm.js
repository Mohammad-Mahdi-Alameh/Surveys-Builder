import React from "react";
const TextForm = ({ type,placeholder,value,label}) => {
    
      return (<>
        <label>{label}</label>
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
            setName(e.target.value);
        }}
        />
        </>
      );
      
    };
export default TextForm;