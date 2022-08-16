import { EventOrganizerWhereUniqueInput } from "../eventOrganizer/EventOrganizerWhereUniqueInput";

export type EventUpdateInput = {
  dates?: Date | null;
  eventOrganizer?: EventOrganizerWhereUniqueInput | null;
  featured?: boolean | null;
  price?: number | null;
};
