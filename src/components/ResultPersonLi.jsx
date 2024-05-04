function ResultPersonLi({ index, tip, value }) {
  return (
    <li className="sumsLi">
      <p className="countSums">{index + 1}</p>
      <p>{value}</p>
      <p>{((value * Number(tip)) / 100).toFixed(2)}</p>
      <p className="resultsums resultsumsDif">
        {(Number(value) + (value * Number(tip)) / 100).toFixed(2)}
      </p>
      <div className="divider"></div>
    </li>
  );
}

export default ResultPersonLi;
