import * as Notification from "expo-notifications";
import theme from "./theme";
let watching = false;
import MyTask from "./services/MyTask";

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
    MyTask.unregister()
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
    MyTask.register()
      .then(() => console.log("Task registered"))
      .catch((err) => console.log(err));
  }
};

export default { watch };
