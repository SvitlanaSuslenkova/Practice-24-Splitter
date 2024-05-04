import Button from "../components/Button";
import "./SelectTip.css";

function SelectTip({ tip, setTip, value, allselected }) {
  //const [selectButton, setSelectButton] = useState(false);
  //const allselected = document.getElementsByClassName("tipValueBtnSelected");

  const tipselected = (e) => {
    e.preventDefault();
    if (e.target.value > 100) {
      e.target.value = 100;
    }
    if (e.target.value.includes(".") == true) {
      e.target.value = `${e.target.value.split(".")[0]}.${e.target.value
        .split(".")[1]
        .slice(0, 2)}`;
    }
    //let newTip = e.target.value;
    setTip(e.target.value);
    e.target.classList.add("tipValueBtnSelected");
    if (allselected.length > 1) {
      Array.from(allselected).forEach((selected) => {
        selected.classList.remove("tipValueBtnSelected");
      });
      e.target.classList.add("tipValueBtnSelected");
    }
  };
  return (
    <>
      <div className="selecttipandcustom">
        <label className="label" htmlFor="tip">
          Select Tip %
        </label>
        <span className="custom">Custom</span>
      </div>
      {
        <div className="tipDiv">
          <Button value="5" className="tipValueBtn" onClick={tipselected} />
          <Button value="10" className="tipValueBtn" onClick={tipselected} />
          <Button value="15" className="tipValueBtn" onClick={tipselected} />
          <Button value="20" className="tipValueBtn" onClick={tipselected} />

          <input
            className="tipValueInput"
            type="number"
            id="tip"
            placeholder=""
            onChange={tipselected}
            onClick={tipselected}
          ></input>
        </div>
      }
    </>
  );
}

export default SelectTip;
