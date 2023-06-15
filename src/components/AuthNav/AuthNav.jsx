import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { RiUserReceivedFill } from 'react-icons/ri';

const AuthNav = () => {
  return (
    <Box display={{ md: 'flex' }} gap="20px">
      <NavLink to="/register">
        <Text color="#14107d">Registration</Text>
      </NavLink>

      <NavLink to="/login">
        <Icon as={RiUserReceivedFill} color="#14107d" />
      </NavLink>
    </Box>
  );
};

export default AuthNav;