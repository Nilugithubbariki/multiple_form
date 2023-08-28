import React, { useContext } from "react";
import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import { multiStepContext } from "./ContextApi";
import DisplayData from "./components/DisplayData";
const App = () => {
  const { currentState, finalData } = useContext(multiStepContext);
  console.log(currentState);
  function showForm(step) {
    console.log(step);
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  }
  return (
    <div>
      <div className="mainContainer">
        <h1 style={{ color: "red", textDecoration: "underline" }}>
          React.js Multi step Application
        </h1>
        {showForm(currentState)}
        <hr />
        {finalData.length > 0 ? <DisplayData /> : ""}
      </div>
    </div>
  );
};

export default App;
