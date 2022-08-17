import { EventOrganizerWhereUniqueInput } from "../eventOrganizer/EventOrganizerWhereUniqueInput";
import { SponsorUpdateManyWithoutEventsInput } from "./SponsorUpdateManyWithoutEventsInput";
import { TicketUpdateManyWithoutEventsInput } from "./TicketUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  description?: string | null;
  eventOrganizer?: EventOrganizerWhereUniqueInput | null;
  images?: string | null;
  name?: string | null;
  price?: number | null;
  tagd?: SponsorUpdateManyWithoutEventsInput;
  tickets?: TicketUpdateManyWithoutEventsInput;
};
