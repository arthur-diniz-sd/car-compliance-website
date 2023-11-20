import PropTypes from "prop-types";

const Button = ({ title, onClick, className }) => {
  return (
    <button
      className={`text-orange-50 text-base font-semibold font-mundial bg-black rounded-3xl ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
