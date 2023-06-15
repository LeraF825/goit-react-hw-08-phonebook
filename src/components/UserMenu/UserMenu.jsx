import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/authThunk';
import { getUserName } from 'redux/auth/authSelector';
import { Icon } from '@chakra-ui/react';
import { RiUser3Fill, RiUserShared2Fill } from 'react-icons/ri';
import { Box, Text } from '@chakra-ui/react';

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <Box
      display={{ md: 'flex' }}
      gap="20px"
      alignItems="center"
      justifyContent="center"
    >
      <Box display={{ md: 'flex' }} alignItems="center" gap="5px">
        {<Icon as={RiUser3Fill} color="#14107d" />}
        <Text color="#14107d">{userName}</Text>
      </Box>

      <button type="button" onClick={() => dispatch(logOutUser())}>
        <Icon
          as={RiUserShared2Fill}
          display={{ md: 'flex' }}
          alignItems="center"
          color="#14107d"
        />
      </button>
    </Box>
  );
};

export default UserMenu;