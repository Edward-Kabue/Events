import { Event } from "../event/Event";
import { Ticket } from "../ticket/Ticket";

export type EventOrganizer = {
  bankAccount: number | null;
  createdAt: Date;
  events?: Array<Event>;
  firstname: string | null;
  id: string;
  lastname: string | null;
  phoneNumber: number | null;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
