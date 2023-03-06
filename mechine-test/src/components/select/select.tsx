import React from "react";
import "./select.css";

const Select = React.memo(
  ({
    name,
    value,
    handleChange,
    isError,
    error,
    label,
    style,
    options,
  }: any) => {
    return (
      <div className="input-view">
        <div className="label">{label}</div>
        <select
          className={`input ${isError && "error-input"}`}
          name={name}
          value={value}
          onChange={(e: any) => handleChange(e.target.value)}
          style={style}
          placeholder="Select"
        >
          <option>select</option>
          {options &&
            options.map((value: any) => {
              return <option value={value}>{value}</option>;
            })}
        </select>
        {isError && <div className="error">{error}</div>}
      </div>
    );
  }
);

export default Select;
