import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authThunk';
import { Box, Button, FormLabel, Input } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box maxW="300px" m="0 auto" mt="20vh">
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Username
          <Input type="text" name="name" />
        </FormLabel>
        <FormLabel>
          Email
          <Input type="email" name="email" />
        </FormLabel>
        <FormLabel>
          Password
          <Input type="password" name="password" minLength="7"/>
        </FormLabel>
        <Button colorScheme="orange" variant="solid" type="submit">
          Sign Up
        </Button>
      </form>
    </Box>
  );
};