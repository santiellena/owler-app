import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";

const TASK_NAME = "ALL_RSI";

TaskManager.defineTask(TASK_NAME, () => {
  try {
    const receivedNewData = "My Task Fetch: " + Math.random(); // do your background fetch here
    console.log(receivedNewData);
    return receivedNewData
      ? BackgroundFetch.BackgroundFetchResult.NewData
      : BackgroundFetch.BackgroundFetchResult.NoData;
  } catch (error) {
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

const register = () => {
  return BackgroundFetch.registerTaskAsync(TASK_NAME, {
    // minimumInterval: 14400, // 4 hours interval
    minimumInterval: 1,
    stopOnTerminate: false,
    startOnBoot: false,
  });
};

const unregister = () => {
  return BackgroundFetch.unregisterTaskAsync(TASK_NAME);
};

export default {
  register,
  unregister,
};
