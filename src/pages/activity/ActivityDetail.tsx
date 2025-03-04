import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";
import { getActivityDetails } from "../../api/activityApi";
import { Activity } from "../../types/activity";
import { formatDateTime, formatDuration } from "../../helper";

// Define the types for the params. Here, `id` is a string.
interface ActivityDetailParams {
  id: string;
}

const ActivityDetail: React.FC = () => {
  const { id } = useParams();
  const [activityDetails, setActivityDetails] = useState<Activity>();

  useEffect(() => {
    const fetchActivityDetails = async () => {
      try {
        const result = await getActivityDetails(id);
        setActivityDetails(result.data);
      } catch (error) {
        console.log("Error occured while fetching activty details", error);
      }
    };

    fetchActivityDetails();
  }, []);

  return (
    <div className="activityDetails">
      <div className="card">
        <div className="photo">
          <Avatar />
        </div>
        <div className="activityDetailsRow">
          <p>Call Type</p>
          <p>{activityDetails?.call_type}</p>
        </div>
        <div className="activityDetailsRow">
          <p>Direction</p>
          <p>{activityDetails?.direction}</p>
        </div>
        <div className="activityDetailsRow">
          <p>Time</p>
          <p>{formatDateTime(activityDetails?.created_at)}</p>
        </div>
        <div className="activityDetailsRow">
          <p>Duration</p>
          <p>{formatDuration(activityDetails?.duration)}</p>
        </div>
        <div className="activityDetailsRow">
          <p>From</p>
          <p>{activityDetails?.from}</p>
        </div>
        <div className="activityDetailsRow">
          <p>To</p>
          <p>{activityDetails?.to}</p>
        </div>
        <div className="activityDetailsRow">
          <p>Via</p>
          <p>{activityDetails?.via}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
