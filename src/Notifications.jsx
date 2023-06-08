import * as Notification from "expo-notifications";
import theme from "./theme";
let watching = false;
import Rsi30Task from "./services/Rsi30Task";

const setWatching = (newValue) => {
  watching = newValue;
};

const watch = () => {
  if (watching) {
    Notification.scheduleNotificationAsync({
      content: {
        title: "STOPPED",
        body: "Watching is OFF",
        color: theme.colors.mainButton,
        autoDismiss: true,
        priority: true,
      },
      trigger: {
        seconds: 1,
      },
    });
    Rsi30Task.unregister()
      .then(() => console.log("Task unregistered"))
      .catch((err) => console.log(err));
    setWatching(false);
  } else if (!watching) {
    Notification.scheduleNotificationAsync({
      content: {
        title: "STARTED",
        body: "Watching is ON",
        color: theme.colors.mainButton,
        autoDismiss: true,
        priority: true,
      },
      trigger: {
        seconds: 1,
      },
    });
    setWatching(true);
    Rsi30Task.register()
      .then(() => console.log("Task registered"))
      .catch((err) => console.log(err));
  }
};

export default { watch };
