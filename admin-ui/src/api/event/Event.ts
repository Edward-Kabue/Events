import { EventOrganizer } from "../eventOrganizer/EventOrganizer";

export type Event = {
  createdAt: Date;
  dates: Date | null;
  eventOrganizer?: EventOrganizer | null;
  featured: boolean | null;
  id: string;
  price: number | null;
  updatedAt: Date;
};
