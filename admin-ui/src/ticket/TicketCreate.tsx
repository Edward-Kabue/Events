import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EventOrganizerTitle } from "../eventOrganizer/EventOrganizerTitle";
import { EventTitle } from "../event/EventTitle";

export const TicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Event_id" source="eventId" />
        <ReferenceInput
          source="eventorganizer.id"
          reference="EventOrganizer"
          label="Event Organizer"
        >
          <SelectInput optionText={EventOrganizerTitle} />
        </ReferenceInput>
        <ReferenceInput source="event.id" reference="Event" label="Price">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
