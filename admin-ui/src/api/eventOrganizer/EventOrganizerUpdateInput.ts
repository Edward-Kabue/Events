import { EventUpdateManyWithoutEventOrganizersInput } from "./EventUpdateManyWithoutEventOrganizersInput";
import { TicketUpdateManyWithoutEventOrganizersInput } from "./TicketUpdateManyWithoutEventOrganizersInput";

export type EventOrganizerUpdateInput = {
  bankAccount?: number | null;
  events?: EventUpdateManyWithoutEventOrganizersInput;
  firstname?: string | null;
  lastname?: string | null;
  phoneNumber?: number | null;
  tickets?: TicketUpdateManyWithoutEventOrganizersInput;
};
