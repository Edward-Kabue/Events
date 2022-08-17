import { EventOrganizer } from "../eventOrganizer/EventOrganizer";
import { Sponsor } from "../sponsor/Sponsor";
import { Ticket } from "../ticket/Ticket";

export type Event = {
  createdAt: Date;
  description: string | null;
  eventOrganizer?: EventOrganizer | null;
  id: string;
  images: string | null;
  name: string | null;
  price: number | null;
  tagd?: Array<Sponsor>;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
