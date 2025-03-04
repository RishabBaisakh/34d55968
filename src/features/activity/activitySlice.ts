import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Activity } from "../../types/activity";

export interface ActivityState {
  activities: Activity[];
  archivedActivities: Activity[];
}

const initialState: ActivityState = {
  activities: [],
  archivedActivities: [],
};

export const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    updateActivities: (state, action: PayloadAction<Activity[]>) => {
      state.activities = action.payload.filter(
        (activity) => activity.is_archived === false
      );
      state.archivedActivities = action.payload.filter(
        (activity) => activity.is_archived === true
      );
    },
  },
});

export const { updateActivities } = activitySlice.actions;

export default activitySlice.reducer;
