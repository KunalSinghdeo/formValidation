import React from 'react'
import "./FormInput.css"

const FormInput = (props) => {
  return (
    <div>
        {/* <label>Username</label> */}
        <input placeholder={props.placeholder}/>
    </div>
  )
}

export default FormInput