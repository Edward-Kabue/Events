import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstNamr?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
