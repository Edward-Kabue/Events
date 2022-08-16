import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Dates" source="dates" />
        <BooleanInput label="Featured" source="featured" />
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Create>
  );
};
