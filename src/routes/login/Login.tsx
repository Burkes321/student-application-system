import { Button, Paper, PasswordInput, TextInput } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import css from './login.module.css';

import { Page } from '../../components/page/Page';

const dummyUser = {
  email: 'test@test.com',
  password: 'password123',
};

export const Login = () => {
  const navigate = useNavigate();

  // Normally for handling form data, using a useReducer hook is better but since we just have two fields, use state calls are fine
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [areCredentialsInvalid, setAreCredentialsInvalid] = useState(false);

  // mantine has build in form validation but it made sense for this task to do the email by hand
  const validateEmail = useCallback(
    (email: string) => /^\S+@\S+$/.test(email),
    []
  );

  useEffect(() => {
    console.log(isEmailInvalid);
  });

  const handleFormSubmit = useCallback(() => {
    if (!validateEmail(email)) {
      setIsEmailInvalid(true);
      return;
    }

    setIsEmailInvalid(false);

    if (email !== dummyUser.email && password !== dummyUser.password) {
      setAreCredentialsInvalid(true);
      return;
    }

    if (email === dummyUser.email && password === dummyUser.password) {
      setIsEmailInvalid(false);
      setAreCredentialsInvalid(false);
      navigate('/home');
    }
  }, [email, navigate, password, validateEmail]);

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
          {isEmailInvalid && (
            <div className={css.badCredentialsWarning}>
              Please submit a valid email address
            </div>
          )}
          {areCredentialsInvalid && (
            <div className={css.badCredentialsWarning}>
              Bad credentials, please check your email and password
            </div>
          )}
          <Button fullWidth mt="xl" onClick={handleFormSubmit}>
            Sign in
          </Button>
        </Paper>
      </div>
    </Page>
  );
};
