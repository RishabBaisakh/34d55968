import React, { useEffect, useState } from "react";
import ActivityCard from "../../components/ActivityCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import useActivities from "../../hooks/useActivities";
import { Activity } from "../../types/activity";
import { Button } from "@mui/material";
import { patchResetActivities } from "../../api/activityApi";

const ActivityFeed = () => {
  const { activities } = useSelector((state: RootState) => state.activity);
  const { fetchActivities } = useActivities();

  useEffect(() => {
    fetchActivities();
  }, []);

  const resetActivities = async () => {
    try {
      const response = await patchResetActivities();
      fetchActivities();
    } catch (error) {
      console.log("Error occured while resetting activities", error);
    }
  };

  return (
    <div className="activityFeed">
      <div className="header">
        <h1>Activity Feed</h1>
        {/* {activities.length === 0 && (
          <Button variant="contained" onClick={resetActivities}>
            Reset
          </Button>
        )} */}
      </div>
      {activities.length === 0 && (
        <p>You can no active activities to view at this moment</p>
      )}
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default ActivityFeed;
