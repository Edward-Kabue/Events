import { EventOrganizer } from "../eventOrganizer/EventOrganizer";
import { Event } from "../event/Event";

export type Ticket = {
  createdAt: Date;
  eventId: string | null;
  eventOrganizer?: EventOrganizer | null;
  id: string;
  price?: Event | null;
  updatedAt: Date;
};
