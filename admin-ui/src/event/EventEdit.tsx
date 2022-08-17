import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { EventOrganizerTitle } from "../eventOrganizer/EventOrganizerTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
