import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { EVENTORGANIZER_TITLE_FIELD } from "../eventOrganizer/EventOrganizerTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Dates" source="dates" />
        <ReferenceField
          label="Event organizer"
          source="eventorganizer.id"
          reference="EventOrganizer"
        >
          <TextField source={EVENTORGANIZER_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Featured" source="featured" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
