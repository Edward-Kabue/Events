import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type EventOrganizerWhereInput = {
  bankAccount?: FloatNullableFilter;
  events?: EventListRelationFilter;
  firstname?: StringNullableFilter;
  id?: StringFilter;
  lastname?: StringNullableFilter;
  phoneNumber?: IntNullableFilter;
  tickets?: TicketListRelationFilter;
};
