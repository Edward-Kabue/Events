import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type EventWhereInput = {
  dates?: DateTimeNullableFilter;
  featured?: BooleanNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
};
