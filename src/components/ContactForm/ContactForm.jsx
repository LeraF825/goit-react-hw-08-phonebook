import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelector';
import { addContact } from 'redux/contacts/contactsThunk';
import { Box, Button, FormLabel, Input, useToast } from '@chakra-ui/react';



const ContactsForm = ({ title }) => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const toast = useToast();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = ev => {
    const { name, value } = ev.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        alert('Error');
    }
  };

  const onSubmitData = ev => {
    ev.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast({
        status: 'warning',
        position: 'top-right',
        description: `${name} is already in contacts.`,
      });
    }

    const contact = {
      name,
      number,
    };
    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <Box
      display={{ md: 'flex' }}
      flexDirection="column"
      w="300px"
      border="1px solid black"
      p="15px"
      borderRadius="8px"
    >
      <form onSubmit={onSubmitData}>
        <FormLabel name="name" display={{ md: 'flex' }} flexDirection="column">
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInput}
            value={name}
          />
        </FormLabel>
        <FormLabel
          name="number"
          display={{ md: 'flex' }}
          flexDirection="column"
        >
          Number:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInput}
            value={number}
          />
        </FormLabel>
        <Button colorScheme="orange" variant="solid" type="submit" mt="10px">
          Add contact
        </Button>
      </form>
    </Box>
  );
};

export default ContactsForm;