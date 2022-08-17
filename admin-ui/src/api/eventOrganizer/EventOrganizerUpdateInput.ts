import { EventUpdateManyWithoutEventOrganizersInput } from "./EventUpdateManyWithoutEventOrganizersInput";
import { TicketUpdateManyWithoutEventOrganizersInput } from "./TicketUpdateManyWithoutEventOrganizersInput";

export type EventOrganizerUpdateInput = {
  email?: string | null;
  events?: EventUpdateManyWithoutEventOrganizersInput;
  firstName?: string | null;
  lastName?: string | null;
  payments?: string | null;
  tickets?: TicketUpdateManyWithoutEventOrganizersInput;
  username?: string | null;
};
