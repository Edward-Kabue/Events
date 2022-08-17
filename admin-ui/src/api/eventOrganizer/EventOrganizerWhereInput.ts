import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type EventOrganizerWhereInput = {
  email?: StringNullableFilter;
  events?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  payments?: StringNullableFilter;
  tickets?: IntNullableFilter;
  username?: StringNullableFilter;
};
