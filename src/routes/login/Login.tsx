import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';

import css from './login.module.css';

import { Page } from '../../components/page/Page';

export const Login = () => {
  const fakeUser = {
    email: 'fakeUser@fake.com',
    password: 'password1',
  };

  // could implement useReducer hook here but since we only have two fields, use state is fine
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('passwordhere');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  // mantine has build in form validation but it made sense for this task to do the email by hand
  const validateEmail = useCallback(
    (email: string) => /^\S+@\S+$/.test(email),
    []
  );

  const handleFormSubmit = useCallback(() => {
    if (!validateEmail) {
      setIsEmailInvalid(true);
      return;
    }

    setIsEmailInvalid(false);

    // TODO: check here against some dummy user and if the credentials then redirect to the home page
  }, [validateEmail]);

  return (
    <Page>
      <div className={css.formContainer}>
        <Paper className={css.form} withBorder shadow="md" p={30} radius="md">
          <div>Please enter your email and password</div>
          <TextInput
            label="Email"
            placeholder="test@test.com"
            required
            mt={10}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <Button fullWidth mt="xl" onClick={handleFormSubmit}>
            Sign in
          </Button>
        </Paper>
      </div>
    </Page>
  );
};
