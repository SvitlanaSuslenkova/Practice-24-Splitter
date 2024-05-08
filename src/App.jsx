import { useState } from "react";
import EqualParts from "./pages/EqualParts";
import DifferentParts from "./pages/DifferentParts";
import ChallengeBy from "./components/ChallengeBy";
import InputCheckbox from "./components/InputCheckbox";
import Logo from "./assets/logo.svg";
import "./reset.css";
import "./App.css";

function App() {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked(!checked);
    setTip("");
  };
  const [tip, setTip] = useState("");

  const allselected = document.getElementsByClassName("tipValueBtnSelected");
  const inputTip = document.getElementById("tip");
  return (
    <>
      <img src={Logo} className="logo" alt="SPLITTER" />
      <main>
        <div className="choosePage">
          <span className={checked ? "choosePageSpan" : "choosePageSpanBold"}>
            divide sum equally
          </span>

          <InputCheckbox
            type="checkbox"
            id="pageTwo"
            htmlFor="pageTwo"
            onClick={handleCheckbox}
          />

          <span
            className={!checked ? "choosePageSpan" : "choosePageSpanBoldTwo"}
          >
            use different sums
          </span>
        </div>
        <div className="container">
          {checked ? (
            <DifferentParts
              tip={tip}
              setTip={setTip}
              allselected={allselected}
              inputTip={inputTip}
            />
          ) : (
            <EqualParts
              tip={tip}
              setTip={setTip}
              allselected={allselected}
              inputTip={inputTip}
            />
          )}
        </div>
      </main>
      <ChallengeBy />
    </>
  );
}

export default App;
