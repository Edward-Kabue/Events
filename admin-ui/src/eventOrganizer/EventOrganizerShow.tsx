import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const EventOrganizerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Events" source="events" />
        <TextField label="First name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last name" source="lastName" />
        <TextField label="Payments" source="payments" />
        <TextField label="Tickets" source="tickets" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
