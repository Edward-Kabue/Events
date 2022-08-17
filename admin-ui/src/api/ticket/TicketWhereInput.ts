import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventOrganizerWhereUniqueInput } from "../eventOrganizer/EventOrganizerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type TicketWhereInput = {
  eventId?: StringNullableFilter;
  eventOrganizer?: EventOrganizerWhereUniqueInput;
  id?: StringFilter;
  price?: EventWhereUniqueInput;
};
