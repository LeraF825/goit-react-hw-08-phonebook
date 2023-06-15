
import { useDispatch, useSelector } from 'react-redux';
import { getFiltered } from 'redux/contacts/contactsSelector';
import { filterContacts } from 'redux/contacts/contactsSlice';
import { Box, FormLabel, Input } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(getFiltered);

  const handleFilter = ev => {
    const { value } = ev.target;
    dispatch(filterContacts(value.trim()));
  };

  return (
    <Box
      maxW="300px"
    >
      <FormLabel
        name="filter"
        w="100%"
        textAlign="center"
      >
        You can find contacts by name
        <Input
          type="text"
          name="filter"
          value={filtered}
          onChange={ev => {
            handleFilter(ev);
          }}
        />
      </FormLabel>
    </Box>
  );
};

export default Filter;
  
