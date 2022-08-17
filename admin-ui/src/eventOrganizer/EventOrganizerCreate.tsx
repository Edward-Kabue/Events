import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const EventOrganizerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Events" source="events" />
        <TextInput label="First name" source="firstName" />
        <TextInput label="Last name" source="lastName" />
        <TextInput label="Payments" source="payments" />
        <NumberInput step={1} label="Tickets" source="tickets" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
