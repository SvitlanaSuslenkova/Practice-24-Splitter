import { useState } from "react";
import Pizza from "../assets/pizza.png";
import Friends from "../assets/friends.png";
import Dead from "../assets/sceleton.png";
import SelectTip from "../components/SelectTip";

export default function EqualParts({ tip, setTip, allselected, inputTip }) {
  const [billSum, setBillSum] = useState("");
  const [people, setPeople] = useState("");
  const [errorPeople, setErrorPeople] = useState(false);

  const handleInputBill = (e) => {
    if (e.target.value > 9999999) {
      e.target.value = 9999999;
    }
    if (e.target.value.includes(".") == true) {
      e.target.value = `${e.target.value.split(".")[0]}.${e.target.value
        .split(".")[1]
        .slice(0, 2)}`;
    }
    return setBillSum(e.target.value);
  };

  const handleInputPeople = (e) => {
    setErrorPeople(false);
    if (e.target.value > 9999999) {
      e.target.value = 9999999;
    }
    if (e.target.value.includes(".") == true) {
      e.target.value = `${e.target.value.split(".")[0]}`;
    }
    if (e.target.value <= 0) {
      setErrorPeople(true);
    }
    return setPeople(e.target.value);
  };

  let tipResult = (((billSum / people) * tip) / 100).toFixed(2);

  let totalResult = (
    ((billSum / people) * tip) / 100 +
    billSum / people
  ).toFixed(2);

  const reseted = () => {
    setPeople("");
    setBillSum("");
    Array.from(allselected).forEach((selected) => {
      selected.classList.remove("tipValueBtnSelected");
    });
    inputTip.value = "";
    setTip("");

    setErrorPeople(false);
  };
  return (
    <>
      <div className="billAndPeopleDiv">
        <div>
          <label htmlFor="bill">Bill</label>
          <input
            className="billInput"
            type="number"
            id="bill"
            onChange={handleInputBill}
            maxLength="999999"
            placeholder="0"
            value={billSum}
          ></input>
        </div>
        <img src={Pizza} className="pizza" alt="" />
        <div>
          <label htmlFor="people">Number of people</label>
          <input
            className="peopleInput"
            type="number"
            id="people"
            onChange={handleInputPeople}
            placeholder="0"
            value={people}
          ></input>
        </div>
        <img src={!errorPeople ? Friends : Dead} className="friends" alt="" />
      </div>
      <SelectTip
        tip={tip}
        setTip={setTip}
        value={tip}
        allselected={allselected}
      />
      <div className="results-container">
        <p>
          Tip Amount<span className="personSpan">/ person</span>
        </p>
        <p className="resultsums">{`$${
          isNaN(tipResult) || !isFinite(tipResult) ? "0.00" : tipResult
        }`}</p>
        <p>
          Total<span className="personSpan">/ person</span>
        </p>
        <p className="resultsums">{`$${
          isNaN(totalResult) || !isFinite(totalResult) ? "0.00" : totalResult
        }`}</p>
      </div>

      <button className="resetbtn" onClick={reseted}>
        RESET
      </button>
    </>
  );
}
