import { SortOrder } from "../../util/SortOrder";

export type EventOrganizerOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  events?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  payments?: SortOrder;
  tickets?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
