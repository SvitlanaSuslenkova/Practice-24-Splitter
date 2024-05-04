const Button = ({ onClick, value, className }) => {
  return (
    <button onClick={onClick} value={value} className={className}>
      {`${value}%`}
    </button>
  );
};
export default Button;
