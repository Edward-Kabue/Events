import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventOrganizerWhereUniqueInput } from "../eventOrganizer/EventOrganizerWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type EventWhereInput = {
  dates?: DateTimeNullableFilter;
  eventOrganizer?: EventOrganizerWhereUniqueInput;
  featured?: BooleanNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
};
