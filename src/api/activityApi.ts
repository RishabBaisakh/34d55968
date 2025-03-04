import apiClient from "./apiClient";

export const getActivities = () => {
  return apiClient.get("/activities");
};

export const getActivityDetails = (id: string) => {
  return apiClient.get(`/activities/${id}`);
};

export const patchArchiveActivity = (id: string) => {
  return apiClient.patch(`/activities/${id}`, { is_archived: true });
};

export const patchUnarchiveActivity = (id: string) => {
  return apiClient.patch(`/activities/${id}`, { is_archived: false });
};

export const patchResetActivities = () => {
  return apiClient.patch("/activities/reset");
};
