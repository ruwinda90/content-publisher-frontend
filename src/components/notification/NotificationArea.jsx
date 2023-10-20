import React, { useEffect, useState } from "react";
import Portal from "./Portal";
import Notification, { notifyType } from "./Notification";
import { useDispatch, useSelector } from "react-redux";
import { notificationSent } from "../../store/notificationSlice";

const NotificationArea = () => {
  const notifyMessage = useSelector((state) => state.notification.notify);
  const [messageQueue, setMessageQueue] = useState([]);
  const dispatch = useDispatch();

//   const sendNotify = () => {
//     const arr = ["Mike", "Tyke", "Spike", "Tom", "Jerry"];
//     dispatch(
//       notificationSent({
//         message: `Hello there Hello ${arr[Math.floor(Math.random() * arr.length)]}`,
//         type: notifyType.ALERT,
//       })
//     );
//   };

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
      {/* <button onClick={() => sendNotify()}>eps</button> */}
    </Portal>
  );
};

export default NotificationArea;
