import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type EventOrganizerWhereInput = {
  email?: StringNullableFilter;
  events?: EventListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  payments?: StringNullableFilter;
  tickets?: TicketListRelationFilter;
  username?: StringNullableFilter;
};
