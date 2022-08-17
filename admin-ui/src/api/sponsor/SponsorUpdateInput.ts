import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SponsorUpdateInput = {
  description?: string | null;
  event?: EventWhereUniqueInput | null;
  images?: string | null;
  name?: string | null;
};
