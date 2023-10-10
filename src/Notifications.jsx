import * as Notification from "expo-notifications";
import theme from "./theme";
import Rsi30Task from "./services/Rsi30Task";
import AsyncStorage from "./AsyncStorage";

const watch = (watching) => {
  if (watching) {
    Rsi30Task.unregister()
      .then(async () => {
        console.log("Task unregistered");
        await AsyncStorage.changeWatchingStatus(false);
        await AsyncStorage.resetPointer();
        Notification.scheduleNotificationAsync({
          content: {
            title: "STOPPED",
            body: "Watching is OFF",
            color: theme.colors.mainButton,
            autoDismiss: true,
            priority: true,
            sound: true,
          },
          trigger: {
            seconds: 1,
          },
        });
      })
      .catch((err) => console.log(err));
  } else if (!watching) {
    Rsi30Task.register()
      .then(async () => {
        console.log("Task registered");
        await AsyncStorage.changeWatchingStatus(true);
        Notification.scheduleNotificationAsync({
          content: {
            title: "STARTED",
            body: "Watching is ON",
            color: theme.colors.mainButton,
            autoDismiss: true,
            priority: true,
            sound: true,
          },
          trigger: {
            seconds: 1,
          },
        });
      })
      .catch((err) => console.log(err));
  }
};

export default { watch };
