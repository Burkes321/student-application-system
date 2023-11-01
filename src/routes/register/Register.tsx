import { Button, Paper, PasswordInput, TextInput } from '@mantine/core';

import css from './register.module.css';

import { Page } from '../../components/page/Page';

export const Register = () => {
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
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            required
            mt="md"
          />
          <Button fullWidth mt="xl">
            Register
          </Button>
        </Paper>
      </div>
    </Page>
  );
};
