import React, { useEffect, useState } from "react";
import ActivityCard from "../../components/ActivityCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import useActivities from "../../hooks/useActivities";
import { Activity } from "../../types/activity";

const ActivityFeed = () => {
  const { activities } = useSelector((state: RootState) => state.activity);
  const { fetchActivities } = useActivities();

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div>
      <h1>Activity Feed</h1>
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default ActivityFeed;
