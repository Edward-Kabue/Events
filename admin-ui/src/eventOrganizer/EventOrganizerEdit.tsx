import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const EventOrganizerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Events" source="events" />
        <TextInput label="First name" source="firstName" />
        <TextInput label="Last name" source="lastName" />
        <TextInput label="Payments" source="payments" />
        <NumberInput step={1} label="Tickets" source="tickets" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
