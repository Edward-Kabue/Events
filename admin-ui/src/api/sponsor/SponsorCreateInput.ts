import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SponsorCreateInput = {
  description?: string | null;
  event?: EventWhereUniqueInput | null;
  images?: string | null;
  name?: string | null;
};
