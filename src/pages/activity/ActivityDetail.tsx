import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import {
  getActivityDetails,
  patchArchiveActivity,
  patchUnarchiveActivity,
} from "../../api/activityApi";
import { Activity } from "../../types/activity";
import { formatDateTime, formatDuration } from "../../helper";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import useActivities from "../../hooks/useActivities";

interface ActivityDetailParams {
  id: string;
}

const ActivityDetail: React.FC = () => {
  const { id } = useParams();
  const [activityDetails, setActivityDetails] = useState<Activity>();
  const { refetchActivities } = useActivities();

  const fetchActivityDetails = async () => {
    try {
      const result = await getActivityDetails(id);
      setActivityDetails(result.data);
    } catch (error) {
      console.log("Error occured while fetching activty details", error);
    }
  };

  useEffect(() => {
    fetchActivityDetails();
  }, []);

  const archiveActivity = async () => {
    const result = await patchArchiveActivity(activityDetails.id);
    refetchActivities();
    fetchActivityDetails();
  };

  const unarchiveActivity = async () => {
    const result = await patchUnarchiveActivity(activityDetails.id);
    refetchActivities();
    fetchActivityDetails();
  };

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
        <div className="activityActions">
          {activityDetails?.is_archived && (
            <span className="archived">Archived</span>
          )}
          <div className="action">
            {!activityDetails?.is_archived && (
              <Tooltip title="Archive">
                <IconButton
                  onClick={(e) => {
                    archiveActivity();
                    e.stopPropagation();
                  }}
                >
                  <ArchiveIcon className="iconButton" />
                </IconButton>
              </Tooltip>
            )}
            {activityDetails?.is_archived && (
              <Tooltip title="Unrrchive">
                <IconButton
                  onClick={(e) => {
                    unarchiveActivity();
                    e.stopPropagation();
                  }}
                >
                  <UnarchiveIcon className="iconButton" />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
