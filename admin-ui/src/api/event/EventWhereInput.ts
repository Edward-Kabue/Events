import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  dates?: DateTimeNullableFilter;
  id?: StringFilter;
};
