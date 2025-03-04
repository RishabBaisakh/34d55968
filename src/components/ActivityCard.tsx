import React from "react";
import { Activity } from "../types/activity";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { useNavigate } from "react-router-dom";
import {
  patchArchiveActivity,
  patchUnarchiveActivity,
} from "../api/activityApi";
import useActivities from "../hooks/useActivities";
import { formatDateTime, formatDuration } from "../helper";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CallMissedIcon from "@mui/icons-material/CallMissed";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import { IconButton, Tooltip } from "@mui/material";

export interface ActivityProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityProps) => {
  const navigate = useNavigate();
  const { refetchActivities } = useActivities();

  const archiveActivity = async () => {
    const result = await patchArchiveActivity(activity.id);
    refetchActivities();
  };

  const unarchiveActivity = async () => {
    const result = await patchUnarchiveActivity(activity.id);
    refetchActivities();
  };

  return (
    <div
      className="activityCard"
      onClick={() => {
        navigate(`/activity/${activity.id}`);
      }}
    >
      <div className="activityCardRow">
        <div className="activityCardColummn call_type">
          {activity.call_type === "answered" && (
            <>
              {activity.direction === "inbound" ? (
                <ArrowDownwardIcon />
              ) : (
                <ArrowUpwardIcon />
              )}
            </>
          )}
          {activity.call_type === "missed" && <CallMissedIcon />}
          {activity.call_type === "voicemail" && <VoicemailIcon />}
        </div>
        <div className="activityCardColumn">
          <div>
            {activity.direction === "inbound" ? activity.from : activity.to}
          </div>
          <div>
            <span>{formatDateTime(activity.created_at)}</span>
          </div>
        </div>
      </div>
      <div className="activityActions">
        <>
          {!activity.is_archived && (
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
          {activity.is_archived && (
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
        </>
      </div>
    </div>
  );
};

export default ActivityCard;
