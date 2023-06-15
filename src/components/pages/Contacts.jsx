import ContactsForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { Box } from '@chakra-ui/react';

const Contacts = () => {
  return (
    <Box
      display={{ md: 'flex' }}
      flexDirection="row"
      justifyContent="space-around"
      p="20px"
    >
      <ContactsForm title="Phone" />
      <Box display={{ md: 'flex' }} flexDirection="column">
        <Filter />
        <ContactsList title="Contacts" />
      </Box>
    </Box>
  );
};

export default Contacts;