import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  eventOrganizerId?: SortOrder;
  id?: SortOrder;
  priceId?: SortOrder;
  updatedAt?: SortOrder;
};
