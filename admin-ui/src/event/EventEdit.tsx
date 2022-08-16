import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Dates" source="dates" />
        <BooleanInput label="Featured" source="featured" />
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
