import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`btn-primary py-4 px-8 font-poppins font-semibold text-[17px] text-primary bg-blue-gradient rounded-xl outline-none ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
