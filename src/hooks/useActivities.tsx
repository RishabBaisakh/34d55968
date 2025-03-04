// hooks/useActivities.ts
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { getActivities } from "../api/activityApi";
import { updateActivities } from "../features/activity/activitySlice";

const useActivities = () => {
  const dispatch = useDispatch();

  const fetchActivities = useCallback(async () => {
    try {
      const response = await getActivities();
      dispatch(updateActivities(response.data));
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  }, [dispatch]);

  const refetchActivities = useCallback(() => {
    fetchActivities();
  }, [fetchActivities]);

  return {
    fetchActivities,
    refetchActivities,
  };
};

export default useActivities;
