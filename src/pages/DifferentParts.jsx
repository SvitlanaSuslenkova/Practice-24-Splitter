import { useState, useEffect } from "react";
import SelectTip from "../components/SelectTip";
import InputPersonLi from "../components/InputPersonLi";
import ResultPersonLi from "../components/ResultPersonLi";

export default function DifferentParts({ tip, setTip, allselected, inputTip }) {
  const [inputValues, setInputValues] = useState([]);
  const [sumInputValues, setSumInputValues] = useState();

  const [numPersons, setNumPersons] = useState(1);
  const handleAddPerson = () => {
    setNumPersons(numPersons + 1);
  };
  const handleRemovePerson = () => {
    if (numPersons > 1) {
      setNumPersons(numPersons - 1);
    }
  };

  const handleInputPerson = (index, value) => {
    value = parseFloat(value).toFixed(2);
    if (parseFloat(value) > 99999) {
      value = "99999";
    }

    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  useEffect(() => {
    if (inputValues.length > numPersons) {
      setInputValues(inputValues.slice(0, numPersons));
    }
    setSumInputValues(inputValues.reduce((accum, a) => accum + Number(a), 0));
  }, [inputValues, numPersons]);

  const reseted = () => {
    setNumPersons(1);
    setInputValues([]);
    Array.from(allselected).forEach((selected) => {
      selected.classList.remove("tipValueBtnSelected");
    });
    inputTip.value = "";
    setTip("");
  };

  return (
    <>
      <ol className="personSpentOl">
        {[...Array(numPersons)].map((_, index) => (
          <InputPersonLi
            key={index}
            index={index}
            onChange={(e) => handleInputPerson(index, e.target.value)}
            value={
              parseFloat(inputValues[index])
                ? parseFloat(inputValues[index])
                : ""
            }
          />
        ))}
      </ol>

      <div className="addPersonAndSumDiv">
        <button className="addPersonBtn" onClick={handleRemovePerson}>
          -
        </button>
        <button className="addPersonBtn" onClick={handleAddPerson}>
          +
        </button>

        <p className="sumRaw">{parseFloat(sumInputValues)?.toFixed(2)}</p>
      </div>
      <SelectTip
        tip={tip}
        setTip={setTip}
        value={tip}
        allselected={allselected}
      />
      <div className="results-container-dif-parts">
        <div className="total-head">
          <p>Spent</p>
          <p>Tip</p>
          <p>Total</p>
        </div>
        <ol className="sumsOl">
          {[...Array(numPersons)].map((_, index) => (
            <ResultPersonLi
              key={index}
              index={index}
              tip={tip}
              inputValues={[...inputValues]}
              value={
                parseFloat(inputValues[index])
                  ? parseFloat(inputValues[index])
                  : ""
              }
            />
          ))}
        </ol>
      </div>
      <div className="bottomDivDiff">
        <button className="resetbtn resetbtnDif" onClick={reseted}>
          RESET
        </button>
        <p className="sumRaw sumWithTip">
          {`${(
            Number(parseFloat(sumInputValues)) +
            (Number(parseFloat(sumInputValues)) * Number(tip)) / 100
          ).toFixed(2)}`}
        </p>
      </div>
    </>
  );
}
