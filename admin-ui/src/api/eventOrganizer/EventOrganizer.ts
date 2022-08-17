import { Event } from "../event/Event";
import { Ticket } from "../ticket/Ticket";

export type EventOrganizer = {
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  payments: string | null;
  tickets?: Array<Ticket>;
  updatedAt: Date;
  username: string | null;
};
