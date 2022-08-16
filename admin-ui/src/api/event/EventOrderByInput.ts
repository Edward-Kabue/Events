import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  dates?: SortOrder;
  eventOrganizerId?: SortOrder;
  featured?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
