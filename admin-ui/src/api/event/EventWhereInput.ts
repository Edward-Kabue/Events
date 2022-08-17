import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventOrganizerWhereUniqueInput } from "../eventOrganizer/EventOrganizerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SponsorListRelationFilter } from "../sponsor/SponsorListRelationFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type EventWhereInput = {
  description?: StringNullableFilter;
  eventOrganizer?: EventOrganizerWhereUniqueInput;
  id?: StringFilter;
  images?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  tagd?: SponsorListRelationFilter;
  tickets?: TicketListRelationFilter;
};
