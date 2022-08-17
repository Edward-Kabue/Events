import { EventOrganizerWhereUniqueInput } from "../eventOrganizer/EventOrganizerWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type TicketCreateInput = {
  eventId?: string | null;
  eventOrganizer?: EventOrganizerWhereUniqueInput | null;
  price?: EventWhereUniqueInput | null;
};
