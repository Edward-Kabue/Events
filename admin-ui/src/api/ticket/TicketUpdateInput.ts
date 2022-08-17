import { EventOrganizerWhereUniqueInput } from "../eventOrganizer/EventOrganizerWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type TicketUpdateInput = {
  eventId?: string | null;
  eventOrganizer?: EventOrganizerWhereUniqueInput | null;
  price?: EventWhereUniqueInput | null;
};
