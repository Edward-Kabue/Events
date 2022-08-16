import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { EventOrganizerTitle } from "../eventOrganizer/EventOrganizerTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Dates" source="dates" />
        <ReferenceInput
          source="eventorganizer.id"
          reference="EventOrganizer"
          label="Event organizer"
        >
          <SelectInput optionText={EventOrganizerTitle} />
        </ReferenceInput>
        <BooleanInput label="Featured" source="featured" />
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Create>
  );
};
