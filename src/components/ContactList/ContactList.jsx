import { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelector';
import { deleteContact, fetchContacts } from 'redux/contacts/contactsThunk';
import { Box, Text, IconButton } from '@chakra-ui/react';
import { RiCloseCircleFill } from 'react-icons/ri';


const ContactsList = ({ title }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <Box>
      <Text
        fontSize="32px"
        textTransform="uppercase"
        fontWeight="600"
        textAlign="center"
      >
        {title}
      </Text>
      <ul>
        {contacts.length > 0 ? (
          contacts.map(contact => (
            <li key={contact.id}>
              <Box display={{ md: 'flex' }} justifyContent="space-between">
                <Text>
                  <span>{contact.name}: </span>
                  <span>{contact.number}</span>
                </Text>

                <IconButton
                  type="button"
                  onClick={() => dispatch(deleteContact(contact.id))}
                  color="red"
                  p="0px"
                  height="20px"
                  width="20px"
                  padding="0"
                  background="transparent"
                  _hover={{ bg: 'transparent' }}
                  icon={<RiCloseCircleFill />}
                />
              </Box>
            </li>
          ))
        ) : (
          <Text>There are no contacts here</Text>
        )}
      </ul>
    </Box>
  );
};
export default ContactsList;