import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import notify from "./rsi/notify";

const RSI30_TASK = "RSI30_TASK";

TaskManager.defineTask(RSI30_TASK, async () => {
  try {
    const receivedNewData = await notify();

    return receivedNewData
      ? BackgroundFetch.BackgroundFetchResult.NewData
      : BackgroundFetch.BackgroundFetchResult.NoData;
  } catch (error) {
    console.log(error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

const register = () => {
  return BackgroundFetch.registerTaskAsync(RSI30_TASK, {
    minimumInterval: 25,
    stopOnTerminate: true,
    startOnBoot: false,
  });
};

const unregister = () => {
  return BackgroundFetch.unregisterTaskAsync(RSI30_TASK);
};

export default {
  register,
  unregister,
};
