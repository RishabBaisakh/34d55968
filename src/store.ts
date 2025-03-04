import { configureStore } from "@reduxjs/toolkit";
import activityReducer from "./features/activity/activitySlice";

export const store = configureStore({
  reducer: {
    activity: activityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
