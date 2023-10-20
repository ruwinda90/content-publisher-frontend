import React, { useEffect, useState } from "react";
import Portal from "./Portal";
import Notification from "./Notification";
import { useSelector } from "react-redux";

const NotificationArea = () => {
  const notifyMessage = useSelector((state) => state.notification.notify);
  const [messageQueue, setMessageQueue] = useState([]);

  useEffect(() => {
    setMessageQueue((state) => [...state, notifyMessage]);
  }, [notifyMessage]);

  const handleDelete = (id) => {
    setMessageQueue((state) => state.filter((item) => item.id !== id));
  };

  return (
    <Portal>
      {messageQueue.map(
        (item) =>
          item.message && (
            <Notification
              key={item.id}
              id={item.id}
              message={item.message}
              type={item.type}
              handleDelete={handleDelete}
            />
          )
      )}
    </Portal>
  );
};

export default NotificationArea;
