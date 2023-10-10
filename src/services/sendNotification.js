import * as Notification from "expo-notifications";
import theme from "../theme";

const sendNotification = ({ title, body }) => {
  Notification.scheduleNotificationAsync({
    content: {
      title,
      body,
      color: theme.colors.mainButton,
      autoDismiss: true,
      priority: true,
      sound: true,
    },
    trigger: {
      seconds: 1,
    },
  });
};

export default sendNotification;
