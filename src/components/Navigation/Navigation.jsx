import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { RiHome2Fill, RiContactsBookFill } from 'react-icons/ri';
import { Icon } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Box display={{ md: 'flex' }} gap="20px">
      <NavLink to="/">
        <Icon as={RiHome2Fill} color="#14107d"/>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Icon as={RiContactsBookFill} color="#f27a11" />
        </NavLink>
      )}
    </Box>
  );
};

export default Navigation;