import React, { useEffect } from "react";
import "./notification.css";
import { FaTimes } from "react-icons/fa";

const Notification = ({ id, message, type, handleDelete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleDelete(id);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="notification" style={{ background: type.color }}>
      {message}
      <button onClick={() => handleDelete(id)}>
        <FaTimes></FaTimes>
      </button>
    </div>
  );
};

export const notifyType = {
  INFO: { color: "mediumseagreen" },
  ALERT: { color: "#FEBE10" },
  ERROR: { color: "#D2122E" },
};

export default Notification;
