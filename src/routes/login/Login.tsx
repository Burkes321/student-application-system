import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { useCallback, useState } from 'react';

import css from './login.module.css';

import { Page } from '../../components/page/Page';

export const Login = () => {
  // could implement useReducer hook here but since we only have two fields, use state is fine
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = useCallback(() => {}, []);

  return (
    <Page>
      <div className={css.formContainer}>
        <Paper className={css.form} withBorder shadow="md" p={30} radius="md">
          <TextInput label="Email" placeholder="test@test.com" required />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </div>
    </Page>
  );
};
