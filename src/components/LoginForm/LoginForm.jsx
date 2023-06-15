import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/authThunk';
import { Box, Button, FormLabel, Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    dispatch(
      logInUser({
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
          Email
          <Input type="email" name="email" />
        </FormLabel>
        <FormLabel>
          Password
          <Input type="password" name="password" />
        </FormLabel>
        <Button colorScheme="orange" variant="solid" type="submit">
          Log In
        </Button>
      </form>
    </Box>
  );
};