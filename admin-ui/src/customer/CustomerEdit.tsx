import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstNamr" />
        <TextInput label="Last Name" source="lastName" />
        <NumberInput step={1} label="Phone Number" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
