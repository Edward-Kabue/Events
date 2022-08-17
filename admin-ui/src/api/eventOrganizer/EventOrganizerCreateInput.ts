import { EventCreateNestedManyWithoutEventOrganizersInput } from "./EventCreateNestedManyWithoutEventOrganizersInput";
import { TicketCreateNestedManyWithoutEventOrganizersInput } from "./TicketCreateNestedManyWithoutEventOrganizersInput";

export type EventOrganizerCreateInput = {
  email?: string | null;
  events?: EventCreateNestedManyWithoutEventOrganizersInput;
  firstName?: string | null;
  lastName?: string | null;
  payments?: string | null;
  tickets?: TicketCreateNestedManyWithoutEventOrganizersInput;
  username?: string | null;
};
