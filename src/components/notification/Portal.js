import React from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const mount = document.getElementById("notifyContainer");

  return createPortal(children, mount);
};

export default Portal;
