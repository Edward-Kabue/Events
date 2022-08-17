import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "eventId";

export const TicketTitle = (record: TTicket): string => {
  return record.eventId || record.id;
};
