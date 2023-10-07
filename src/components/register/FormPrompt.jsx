import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const FormPrompt = ({ message }) => {
  return (
    <p className="prompt">
      <FaInfoCircle />
      &nbsp;{message}
    </p>
  );
};

export default FormPrompt;
