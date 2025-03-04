export interface Activity {
  id: string;
  direction: "inbound" | "outbound";
  from: number;
  to: number;
  via: number;
  duration: number;
  is_archived: boolean;
  call_type: "answered" | "missed" | "voicemail";
  created_at: string; // change this
}
