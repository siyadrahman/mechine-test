import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import "./stepHandler.css";

const StepHandle = React.memo(({ step }: any) => {
  return (
    <div className="steps">
      <div className="line" />
      <div className="step-1 step">
        {step > 1 ? (
          <div className="round selected">
            <DoneIcon fontSize="large" />
          </div>
        ) : (
          <div className={`round ${step === 1 ? "current" : "unselected"}`}>
            <div
              className={`inner-round ${
                step === 1 ? "current-inner" : "unselected-inner"
              }`}
            >
              <div className={`dot ${step === 1 ? "current" : "unselected"}`} />
            </div>
          </div>
        )}
        <div>Student Details</div>
      </div>
      <div className="step-2 step">
        {step > 2 ? (
          <div className="round selected">
            <DoneIcon fontSize="large" />
          </div>
        ) : (
          <div className={`round ${step === 2 ? "current" : "unselected"}`}>
            <div
              className={`inner-round ${
                step === 2 ? "current-inner" : "unselected-inner"
              }`}
            >
              <div className={`dot ${step === 2 ? "current" : "unselected"}`} />
            </div>
          </div>
        )}
        <div>Father's Details</div>
      </div>
      <div className="step-3 step">
        {step > 3 ? (
          <div className="round selected">
            <DoneIcon fontSize="large" />
          </div>
        ) : (
          <div className={`round ${step === 3 ? "current" : "unselected"}`}>
            <div
              className={`inner-round ${
                step === 3 ? "current-inner" : "unselected-inner"
              }`}
            >
              <div className={`dot ${step === 3 ? "current" : "unselected"}`} />
            </div>
          </div>
        )}
        <div>Mother's Details</div>
      </div>
    </div>
  );
});

export default StepHandle;
