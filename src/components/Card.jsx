import PropTypes from "prop-types";

const Card = ({ children, className }) => {
  return (
    <div
      className={`p-6 rounded-3xl justify-start items-start ${className}`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
