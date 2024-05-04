import Friend from "../assets/friend.png";
import PizzaSlice from "../assets/pizza-slice.png";
function InputPersonLi({ index, onChange, maxLength, value }) {
  return (
    <li>
      <label className="personSpent">Person spent</label>
      <div className="billInputPersonDiv">
        <span>{index + 1}</span>
        <input
          className="billInputPerson"
          type="number"
          onChange={onChange}
          maxLength={maxLength}
          value={value}
        ></input>
        <img src={Friend} className="friend" alt="" />
        <img src={PizzaSlice} className="pizzaSlice" alt="" />
      </div>
    </li>
  );
}

export default InputPersonLi;
// className="InputPersonNumberSpan"
