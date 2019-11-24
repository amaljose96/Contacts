import React from "react";
import ContactImage from "./ContactImage";
import {
  ContactBlockContainer,
  ContactDetail,
  ContactName,
  ContactOptions,
  ContactOption
} from "./styles";
function ContactBlock({ contact }) {
  return (
    <ContactBlockContainer>
      <ContactImage contact={contact} />
      <ContactDetail>
        <ContactName>{contact.name}</ContactName>
        <ContactOptions>
          <ContactOption>Call</ContactOption>
          <ContactOption>Text</ContactOption>
        </ContactOptions>
      </ContactDetail>
    </ContactBlockContainer>
  );
}
export default ContactBlock;
