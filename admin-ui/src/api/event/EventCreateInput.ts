import { EventOrganizerWhereUniqueInput } from "../eventOrganizer/EventOrganizerWhereUniqueInput";

export type EventCreateInput = {
  dates?: Date | null;
  eventOrganizer?: EventOrganizerWhereUniqueInput | null;
  featured?: boolean | null;
  price?: number | null;
};
