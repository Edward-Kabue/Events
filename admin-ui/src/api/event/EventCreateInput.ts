import { EventOrganizerWhereUniqueInput } from "../eventOrganizer/EventOrganizerWhereUniqueInput";
import { SponsorCreateNestedManyWithoutEventsInput } from "./SponsorCreateNestedManyWithoutEventsInput";
import { TicketCreateNestedManyWithoutEventsInput } from "./TicketCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  description?: string | null;
  eventOrganizer?: EventOrganizerWhereUniqueInput | null;
  images?: string | null;
  name?: string | null;
  price?: number | null;
  tagd?: SponsorCreateNestedManyWithoutEventsInput;
  tickets?: TicketCreateNestedManyWithoutEventsInput;
};
