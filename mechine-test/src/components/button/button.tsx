import React from "react";
import './button.css'

const Button= React.memo(({value, click, varient}: any) => {
    return(
        <button onClick={() => click()} className={`button ${varient}`}>{value}</button>
    )
});

export default Button;