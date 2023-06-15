import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { Box, Flex } from '@chakra-ui/react';

const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Box display={{ md: 'flex' }} flexDirection="column" h="100vh" w="100vw">
      <Box as="header" p="3" boxShadow="base" rounded="md" bg="white">
        <Flex alignItems="center" justifyContent="space-between">
          <Navigation />
          <Box display={{ md: 'flex' }} columnGap="10px">
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Flex>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Layout;