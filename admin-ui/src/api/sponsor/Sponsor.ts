import { Event } from "../event/Event";

export type Sponsor = {
  createdAt: Date;
  description: string | null;
  event?: Event | null;
  id: string;
  images: string | null;
  name: string | null;
  updatedAt: Date;
};
