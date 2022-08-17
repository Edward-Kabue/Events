import { SortOrder } from "../../util/SortOrder";

export type EventOrganizerOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  payments?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
