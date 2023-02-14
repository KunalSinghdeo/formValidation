import React, { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  console.log(errorMessage);
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange}></input>
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
