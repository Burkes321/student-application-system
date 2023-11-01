import { Button, Paper, PasswordInput, TextInput } from '@mantine/core';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import css from './login.module.css';

import { Page } from '../../components/page/Page';
import { isEmailValid } from '../utils/isEmailValid';

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

  const handleFormSubmit = useCallback(() => {
    if (!isEmailValid(email)) {
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
  }, [email, navigate, password]);

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
