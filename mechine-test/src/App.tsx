import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Step1 from "./modules/step1/step1";
import StepHandle from "./modules/stepHandler/stepHandler";
import { setStep1 } from "./store/userReducer";

function App() {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();

  const stepHandler = (step: number, data: any) => {
    if(step === 1) {
      dispatch(setStep1(data));
      setStep(step + 1);
    }
  }

  return (
    <div className="App">
      <div className="inner-container">
        <div className="header-container">
          <div className="header-left">
            {/* <img src='' alt="logo"/> */}
            <div className="page-title">United Indian School</div>
          </div>
          <div className="adm-msg">ADMISSION FORM:2023-2024</div>
        </div>
        <div className="step-handler-container">
          <StepHandle step={step} />
        </div>
        <div className="note">
          Note: Fill The Online Registration form according to your passport
          detatails
        </div>
        <div className="form-container">
          {step === 1 && <Step1 submit={(e: any) => stepHandler(1, e)}/>}
          {/* {step === 2 && <div>Step 2</div>} */}
        </div>
      </div>
    </div>
  );
}

export default App;
