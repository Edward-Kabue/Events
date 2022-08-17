import { EventOrganizer as TEventOrganizer } from "../api/eventOrganizer/EventOrganizer";

export const EVENTORGANIZER_TITLE_FIELD = "firstName";

export const EventOrganizerTitle = (record: TEventOrganizer): string => {
  return record.firstName || record.id;
};
