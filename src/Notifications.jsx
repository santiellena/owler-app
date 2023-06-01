import React from "react";
import * as Notification from "expo-notifications";

const handleNotification = () => {
  Notification.scheduleNotificationAsync({
    content: {
      title: "ALERT",
      body: "x var is 30 or more",
    },
    trigger: {
      seconds: 1,
    },
  });
};

export default { handleNotification };
