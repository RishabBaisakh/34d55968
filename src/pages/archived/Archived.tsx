import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ActivityCard from "../../components/ActivityCard";
import { useNavigate } from "react-router-dom";

const Archived = () => {
  const navigate = useNavigate();
  const { activities, archivedActivities } = useSelector(
    (state: RootState) => state.activity
  );

  useEffect(() => {
    if (archivedActivities.length === 0 && activities.length === 0)
      navigate("/");
  }, []);

  return (
    <div>
      <h1>Archived</h1>
      {archivedActivities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
      {archivedActivities.length === 0 && (
        <div>
          <p>You currently have no archived activity.</p>
        </div>
      )}
    </div>
  );
};

export default Archived;
