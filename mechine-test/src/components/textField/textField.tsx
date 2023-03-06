import React from "react";
import './textField.css'

const TextField = React.memo(
  ({ name, value, handleChange, isError, error, type, label, style }: any) => {
    return (
      <div className="input-view">
        <div className="label">{label}</div>
        <input
        className={`input ${isError && 'error-input'}`}
          name={name}
          value={value}
          onChange={handleChange}
          type={type || "text"}
          style={style}
        />
        {isError && <div className="error">{error}</div>}
      </div>
    );
  }
);

export default TextField;
