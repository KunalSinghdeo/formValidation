import React, { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange}></input>
    </div>
  );
};

export default FormInput;
