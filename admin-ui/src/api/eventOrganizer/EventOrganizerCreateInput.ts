import { EventCreateNestedManyWithoutEventOrganizersInput } from "./EventCreateNestedManyWithoutEventOrganizersInput";
import { TicketCreateNestedManyWithoutEventOrganizersInput } from "./TicketCreateNestedManyWithoutEventOrganizersInput";

export type EventOrganizerCreateInput = {
  bankAccount?: number | null;
  events?: EventCreateNestedManyWithoutEventOrganizersInput;
  firstname?: string | null;
  lastname?: string | null;
  phoneNumber?: number | null;
  tickets?: TicketCreateNestedManyWithoutEventOrganizersInput;
};
