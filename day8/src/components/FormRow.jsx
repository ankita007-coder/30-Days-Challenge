import React from "react";



const FormRow = ({type,name,id,placeholder}) => {
  return <div>
    <input type={type} name={name} id={id} placeholder={placeholder}/>
  </div>;
};

export default FormRow;
