// import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ onClick, children, icon, className, ...props }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  icon: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  icon: null,
  className: "",
};

export default Button;
