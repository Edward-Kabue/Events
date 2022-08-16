import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { EVENTORGANIZER_TITLE_FIELD } from "./EventOrganizerTitle";

export const EventOrganizerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bank account" source="bankAccount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Firstname " source="firstname" />
        <TextField label="ID" source="id" />
        <TextField label="Lastname" source="lastname" />
        <TextField label="Phone number" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Event"
          target="EventOrganizerId"
          label="Events"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Ticket"
          target="EventOrganizerId"
          label="Tickets"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Event_id"
              source="eventorganizer.id"
              reference="EventOrganizer"
            >
              <TextField source={EVENTORGANIZER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
