import PropTypes from "prop-types";

function Box({ children, updateSymbol, index }) {
  const handleClick = (event) => {
    event.preventDefault();
    updateSymbol(index);
  };
  return (
    <div onClick={handleClick} className="size-7 bg-white flex justify-center items-center text-black">
      {children}
    </div>
  );
}

Box.propTypes = {
  children: PropTypes.string.isRequired,
  updateSymbol: PropTypes.func.isRequired,
  index: PropTypes.number
};

export default Box;