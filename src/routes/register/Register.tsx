import { Button, Paper, PasswordInput, TextInput } from '@mantine/core';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import css from './register.module.css';

import { Page } from '../../components/page/Page';
import { isEmailValid } from '../utils/isEmailValid';

export const Register = () => {
  console.log('register run');
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [notMatchingPasswords, setNotMatchingPasswords] = useState(false);

  const isPasswordInvalid =
    !password || !confirmPassword || password !== confirmPassword;

  const handleFormSubmit = useCallback(() => {
    setIsEmailInvalid(false);
    setNotMatchingPasswords(false);

    if (!isEmailValid(email)) {
      setIsEmailInvalid(true);
      return;
    }

    if (isPasswordInvalid) {
      setNotMatchingPasswords(true);
      return;
    }

    // if there are no issues with the form submission then redir to the home page

    navigate('/home');

    return;
  }, [email, isPasswordInvalid, navigate]);

  return (
    <Page>
      <div className={css.formContainer}>
        <Paper className={css.form} withBorder shadow="md" p={30} radius="md">
          <div>Sign up to the students application system</div>
          <TextInput
            label="Email"
            placeholder="test@test.com"
            required
            mt={10}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            required
            mt="md"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {isEmailInvalid && (
            <div className={css.badCredentialsWarning}>
              Please submit a valid email address
            </div>
          )}

          {notMatchingPasswords && (
            <div className={css.badCredentialsWarning}>
              Your password is invalid. Please make sure you entered a password
              and that the password confirmation matches
            </div>
          )}

          <Button onClick={handleFormSubmit} fullWidth mt="xl">
            Register
          </Button>
        </Paper>
      </div>
    </Page>
  );
};
