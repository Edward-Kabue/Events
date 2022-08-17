import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SponsorWhereInput = {
  description?: StringNullableFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  images?: StringNullableFilter;
  name?: StringNullableFilter;
};
